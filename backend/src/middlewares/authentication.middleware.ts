import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();


interface jwtPayload{
    userId: string,
    email: string,
    iat: number,
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

export async function authenticateToken(req: Request, res: Response, next: NextFunction) {
    try {
            const authHeader = req.headers['authorization'];
        const token = authHeader?.split(' ')[1];
        if (!token) throw new Error('MissingToken');

        let revokedToken;
        try {
            revokedToken = await prisma.revokedToken.findUnique({ where: { token } });
        } catch (err) {
            console.error("Database unreachable:", err);
            res.status(503).json({ message: "Service temporarily unavailable" });
            return;
        }

        if (revokedToken) {
            res.status(401).json({ message: "Token revoked" });
            return;
        }


        jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
            if (err || typeof decoded !== 'object') {
                res.status(401).json({ message: 'Invalid or expired token' });
                return;
            }
            req.user = decoded as any;
            next();
        });
    } catch (error: any) {
        console.error('authenticateToken error', error);

        if (error.message === 'MissingToken'){
            res.status(401).json({ message: 'Missing token'});
            return;
        }

        if (error.message === 'RevokedToken'){
            res.status(401).json({message: 'Token revoked'});
            return;
        }

        res.status(500).json({message: 'Internal Server Error'});


    }
    
}