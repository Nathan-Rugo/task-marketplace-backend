import { Request, Response } from 'express';
import { loginUser, signupUser } from '../services/authentication.service';

export async function signup(req: Request, res: Response) {
const { username, email, password, phone, profilePicture } = req.body;

    try {
        const user = await signupUser(username, email, password, phone, profilePicture);
        return res.status(201).json(user);
    } catch (error: any) {
        if (error.message === 'AlreadyExists') {
        return res.status(409).json({ message: 'Email or username already in use.' });
        }
        console.error('Signup error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export async function login(req: Request, res: Response){
    try {
        const { email, password } = req.body;
        const { token, user } = await loginUser(email, password);
        return res.status(201).json({ token, user });
    } catch (error: any) {
        if(error.message === 'InvalidCredentials'){
            return res.status(401).json({ message: 'Invalid email or password'})
        }
        console.error('Login error: ', error);
        return res.status(500).json( { message: 'Internal server error'});
    }
}