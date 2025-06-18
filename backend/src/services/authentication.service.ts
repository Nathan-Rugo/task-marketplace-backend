import { PrismaClient, User } from '../generated/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function signupUser(
    username: string,
    email: string,
    password: string,
    phone: string,
    profilePicture: string
    ): Promise<{ token: string; user: Omit<User, 'password'> }> {
    // Hash the incoming password
    const hashed = await bcrypt.hash(password, 10);

    try {
        // Create the user record
        const user = await prisma.user.create({
        data: { username, email, password: hashed, phone, profilePicture },
        });

        // Sign JWT
        const token = jwt.sign(
            {userId: user.id, email: user.email},
            process.env.JWT_SECRET as string,
            { expiresIn: '7d' }
        );

        // Strip out the password before returning
        const { password: _, ...userSafe } = user;
        return {token, user: userSafe}
    } catch (err: any) {
        // Handle unique constraint violations
        if (err.code === 'P2002') {
        // Prisma error code for unique constraint
        throw new Error('AlreadyExists');
        }
        throw err;
    }
}

export async function loginUser(
    email: string,
    password: string,
): Promise<{ token: string; user: Omit<User, 'password'> }>{
    // Fetch user by email
    const user = await prisma.user.findUnique({ where: { email }});
    if(!user) throw new Error('InvalidCredentials');
    
    // Compare provided password with stored hash
    const match = await bcrypt.compare(password, user.password);
    if(!match) throw new Error('InvalidCredential');

    // Sign JWT
    const token = jwt.sign(
        {userId: user.id, email: user.email},
        process.env.JWT_SECRET as string,
        { expiresIn: '7d' }
    );

    const { password: _, ...userSafe} = user;
    return {token, user: userSafe}
}
