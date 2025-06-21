import { PrismaClient, User } from '../generated/prisma';
import bcrypt from 'bcrypt';
import { generateToken } from '../lib/utils';

const prisma = new PrismaClient();

export async function signupUser(
  username: string,
  email: string,
  password: string,
  phone?: string,
  profilePicture?: string
): Promise<{ token: string; user: Omit<User, 'password'> }> {
  const hashed = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashed,
        phone,
        profilePicture,
        authProvider: 'CREDENTIALS',
      },
    });

    const token = generateToken({ id: user.id, email: user.email });
    const { password: _, ...userSafe } = user;
    return { token, user: userSafe };
  } catch (err: any) {
    if (err.code === 'P2002') {
      const target = err.meta?.target?.[0];
      if (target === 'email') throw new Error('EmailExists');
      if (target === 'username') throw new Error('UsernameExists');
      if (target === 'phone') throw new Error('PhoneExists');
      throw new Error('AlreadyExists');
    }

    throw err;
  }
}

export async function loginUser(
  email: string,
  password: string
): Promise<{ token: string; user: Omit<User, 'password'> }> {
  const user = await prisma.user.findUnique({ where: { email } });

  // User not found
  if (!user) {
    throw new Error('InvalidCredentials');
  }

  // 🔒 Block users who signed up via Google
  if (user.authProvider === 'GOOGLE') {
    throw new Error('UseGoogleLogin');
  }

  // Check if password exists (extra safety)
  if (!user.password) {
    throw new Error('MissingPassword');
  }

  // Check password match
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error('InvalidCredentials');
  }

  const token = generateToken({ id: user.id, email: user.email });
  const { password: _, ...userSafe } = user;

  return { token, user: userSafe };
}
