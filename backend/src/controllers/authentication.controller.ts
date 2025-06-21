import { Request, Response } from 'express';
import { loginUser, signupUser } from '../services/authentication.service';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { PrismaClient } from '../generated/prisma';
import { generateToken } from '../lib/utils';

const jwtSecret = process.env.JWT_SECRET;
const prisma = new PrismaClient();

export async function signup(req: Request, res: Response): Promise<Response> {
  const { username, email, password, phone, profilePicture } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Username, email, and password are required.' });
  }

  try {
    const result = await signupUser(username, email, password, phone, profilePicture);
    return res.status(201).json(result);
  } catch (error: any) {
    switch (error.message) {
      case 'EmailExists':
        return res.status(409).json({ message: 'Email is already in use.' });
      case 'UsernameExists':
        return res.status(409).json({ message: 'Username is already taken.' });
      case 'PhoneExists':
        return res.status(409).json({ message: 'Phone number already linked to another account.' });
      case 'AlreadyExists':
        return res.status(409).json({ message: 'Account already exists with provided credentials.' });
      default:
        console.error('Signup error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export async function login(req: Request, res: Response): Promise<Response> {
    try {
        const { email, password } = req.body;
        const { token, user } = await loginUser(email, password);
        return res.status(200).json({ token, user });
    } catch (error: any) {
        if (error.message === 'InvalidCredentials') {
          return res.status(401).json({ message: 'Invalid email or password.' });
        }

        if (error.message === 'UseGoogleLogin') {
          return res.status(403).json({ message: 'This account was created using Google. Please log in with Google instead.' });
        }

        if (error.message === 'MissingPassword') {
          return res.status(403).json({ message: 'This account is incomplete. Please reset your password or use Google login.' });
        }

        console.error('Login error:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
}

export async function validateToken (req: Request, res: Response): Promise<Response> {
    try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authorization token missing or malformed.' });
    }

    const token = authHeader.split(' ')[1];

    const decoded = jwt.verify(token, jwtSecret!) as JwtPayload;

    if (!decoded?.email) {
      return res.status(401).json({ error: 'Invalid token: missing user.' });
    }

    const user = await prisma.user.findUnique({ where: { email: decoded.email },
      select: {
        password: false, // Exclude password from the response
      }
    })


    if (!user) {
      return res.status(401).json({ error: 'User not found.' });
    }

    return res.status(200).json({ user });

  } catch (error: any) {
    console.error('Token validation failed:', error.message);
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
};


export async function googleSignup(req: Request, res: Response): Promise<Response> {
  const { username, email, profilePicture } = req.body;

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({ message: 'Email already in use.' });
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

    return res.status(201).json({ token, user: userSafe });
  } catch (error) {
    console.error('Google Sign Up error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}


export async function googleLogin(req: Request, res: Response): Promise<Response> {
  const { email, username, profilePicture } = req.body;

  try {
    // 1. Check for Strathmore email
    if (!email.endsWith('@strathmore.edu')) {
      return res.status(403).json({ message: 'Only @strathmore.edu emails are allowed.' });
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
    }

    // 4. Generate JWT token
    const token = generateToken({ id: user.id, email: user.email });

    // 5. Exclude password
    const { password, ...userSafe } = user;

    return res.status(200).json({ token, user: userSafe });

  } catch (error) {
    console.error('Google Login Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}