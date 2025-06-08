import { Router } from 'express';
import { getCurrentUser } from '../controllers/user.controller';
import { authenticateToken } from '../middlewares/authentication.middleware';

const router = Router();

// GET /users/me → protected route
router.get('/me', authenticateToken, getCurrentUser);

export default router;
