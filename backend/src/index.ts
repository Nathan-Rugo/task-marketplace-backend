import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import { Server as IOServer } from 'socket.io';

import authRoutes from './routes/authentication.routes';
import userRoutes from './routes/user.routes';
import taskRoutes from './routes/task.routes';
import applicationRoutes from './routes/application.routes';
import paymentRoutes from './routes/payment.routes';

dotenv.config();

const app = express();
const server = http.createServer(app);

export const io = new IOServer(server, {
    cors: { origin: '*', methods: ['GET', 'POST']},
});

app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Strathmore Task Marketplace API');
});

// Health check
app.get('/health', async (req, res) => {
  try {
    res.status(200).json({ status: 'ok' });
  } catch (error) {
    res.status(500).json({ status: 'error', error });
  }
});

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/tasks', taskRoutes);
app.use('/applications', applicationRoutes);
app.use('/payments', paymentRoutes);

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';
server.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});

io.on('connection', (socket) => {
  console.log('User connected', socket.id);
});