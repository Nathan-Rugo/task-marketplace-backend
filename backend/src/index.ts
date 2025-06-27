import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from './generated/prisma';

import authRoutes from './routes/authentication.routes';
import userRoutes from './routes/user.routes';
import taskRoutes from './routes/task.routes';
import applicationRoutes from './routes/application.routes';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Strathmore Task Marketplace API');
});

// Health check
app.get('/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({ status: 'ok' });
  } catch (error) {
    res.status(500).json({ status: 'error', error });
  }
});

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/tasks', taskRoutes);
app.use('/applications', applicationRoutes);

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';
app.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
