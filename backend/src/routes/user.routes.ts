import { Router } from 'express';
import { getCurrentUserController, getTasksByUserIdController } from '../controllers/user.controller';
import { authenticateToken } from '../middlewares/authentication.middleware';

const router = Router();

// GET /users/me → protected route
router.get('/me', authenticateToken, getCurrentUserController);
router.get('/tasks', authenticateToken, getTasksByUserIdController);

export default router;
