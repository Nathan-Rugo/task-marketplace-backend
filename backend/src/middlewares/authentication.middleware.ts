import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface jwtPayload{
    userId: string,
    email: string,
    isat: number,
    exp: number
}

// Extend Express's Request to include `user`
declare global{
    namespace Express{
        interface Request{
            user? : JwtPayload;
        }
    }
}

export function authenticateToken(req: Request, res:Response, next:NextFunction){
    // Get Header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer `<token>`

    if(!token){
        return res.status(401).json({ message: 'Missing authorization token '});
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
        if (err || typeof decoded !== 'object') {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }

        // Attach user info to request
        req.user = decoded as JwtPayload;
        next();
    });
}