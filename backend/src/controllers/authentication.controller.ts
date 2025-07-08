import { Request, Response } from 'express';
import { loginUser, signupUser } from '../services/authentication.service';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { generateToken } from '../lib/utils/generateToken';
import { PrismaClient } from '../generated/prisma';
import { userReturned } from '../lib/selectTypes';
import validator from 'validator';

const prisma = new PrismaClient();
const jwtSecret = process.env.JWT_SECRET;




export async function signup(req: Request, res: Response): Promise<void> {
  const { username, email, password, phone, profilePicture } = req.body;

  if (!username || !email || !password) {
    res
      .status(400)
      .json({ message: 'Username, email, and password are required.' });
    return;
  }

  // Email validation
  if (!validator.isEmail(email)) {
    res.status(400).json({ message: 'Invalid email address.' });
    return;
  }

  const isStrong = validator.isStrongPassword(password, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 0,
    minNumbers: 1,
    minSymbols: 0,
  });

  if (!isStrong) {
    res.status(400).json({
      message: 'Weak password',
      detail:
        'Password must be at least 8 characters and include at least one number.',
    });
    return;
  }

  try {
    const result = await signupUser(
      username,
      email,
      password,
      phone,
      profilePicture
    );
    res.status(201).json({ result });
  } catch (error: any) {
    switch (error.message) {
      case 'EmailExists':
        res.status(409).json({ message: 'Email is already in use.' });
        break;
      case 'UsernameExists':
        res.status(409).json({ message: 'Username is already taken.' });
        break;
      case 'PhoneExists':
        res
          .status(409)
          .json({ message: 'Phone number already linked to another account.' });
        break;
      case 'AlreadyExists':
        res.status(409).json({
          message: 'Account already exists with provided credentials.',
        });
        break;
      default:
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export async function login(req: Request, res: Response): Promise<void> {
    try {
        const { email, password } = req.body;
        const { token, user } = await loginUser(email, password);
        res.status(200).json({ message: 'Login Successful', token, user });
    } catch (error: any) {
        if (error.message === 'InvalidCredentials') {
          res.status(401).json({ message: 'Invalid email or password.' });
        }

        if (error.message === 'UseGoogleLogin') {
          res.status(403).json({ message: 'This account was created using Google. Please log in with Google instead.' });
        }

        if (error.message === 'MissingPassword') {
        res.status(403).json({ message: 'This account is incomplete. Please reset your password or use Google login.' });
        }

        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
}

export async function validateToken (req: Request, res: Response): Promise<void> {
    try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Authorization token missing or malformed.' });
      return;
    }

    const token = authHeader.split(' ')[1];

    const decoded = jwt.verify(token, jwtSecret!) as JwtPayload;

    if (!decoded?.email) {
      res.status(401).json({ error: 'Invalid token: missing user.' });
      return;
    }

    const user = await prisma.user.findUnique({ where: { email: decoded.email },
      select: userReturned
    })


    if (!user) {
      res.status(401).json({ error: 'User not found.' });
      return;
    }

    res.status(200).json({ message: 'Token Validated', user });

  } catch (error: any) {
    console.error('Token validation failed:', error.message);
    res.status(401).json({ error: 'Invalid or expired token.' });
  }
};


export async function googleSignup(req: Request, res: Response): Promise<void> {
  const { username, email, profilePicture } = req.body;

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      res.status(409).json({ message: 'Email already in use.' });
      return;
    }

    // Create user
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: '', // Google users don't need password
        phone: '',     // collect this later
        profilePicture,
        authProvider: 'GOOGLE'
      },
    });

    // Create token
    const token = generateToken({
      id: newUser.id,
      email: newUser.email,
    });
    const { password, ...userSafe } = newUser;

    res.status(201).json({ message: 'Google signup successful', token, user: userSafe });
  } catch (error) {
    console.error('Google Sign Up error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


export async function googleLogin(req: Request, res: Response): Promise<void> {
  const { email, username, profilePicture } = req.body;

  try {
    // 1. Check for Strathmore email
    if (!email.endsWith('@strathmore.edu')) {
      res.status(403).json({ message: 'Only @strathmore.edu emails are allowed.' });
      return;
    }

    // 2. Check if user exists
    let user = await prisma.user.findUnique({ where: { email } });

    // 3. Auto-signup if user doesn't exist
    if (!user) {
      user = await prisma.user.create({
        data: {
          username,
          email,
          password: '', // Google users do not use password
          phone: '',    // can be collected later
          profilePicture,
          authProvider: 'GOOGLE'
        }
      });
      return;
    }

    // 4. Generate JWT token
    const token = generateToken({ id: user.id, email: user.email });

    // 5. Exclude password
    const { password, ...userSafe } = user;

    res.status(200).json({ message: 'Google login successfull', token, user: userSafe });

  } catch (error) {
    console.error('Google Login Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function logout(req: Request, res: Response){
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Authorization token missing or malformed.' });
      return;
    }

    const token = authHeader.split(' ')[1];
    if(!token) res.status(400).json({message: 'No token provided'});

    const decoded: any = jwt.decode(token);
    
    if (!decoded || !decoded.exp) {
      res.status(400).json({ message: 'Invalid token' });
      return;
    }

    const expiresAt = new Date(decoded.exp * 1000);
    await prisma.revokedToken.create({ data: { token, expiresAt } });

    res.status(200).json({ message: 'Logged out; token revoked' })
  } catch (error: any) {
    console.log('logout error', error);
    res.status(500).json({message: 'Internal Server Error'});
  }
    
}