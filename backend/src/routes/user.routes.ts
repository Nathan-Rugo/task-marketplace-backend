import { Router } from 'express';
import { getCurrentUserController, getTasksByUserIdController, toggleAvailabilityController, editProfileController, getUserDetailsController } from '../controllers/user.controller';
import { authenticateToken } from '../middlewares/authentication.middleware';

const router = Router();

router.get('/me', authenticateToken, getCurrentUserController);
router.get('/tasks', authenticateToken, getTasksByUserIdController);
router.patch('/toggle', authenticateToken, toggleAvailabilityController);
router.put('/me', authenticateToken, editProfileController);
router.get('/:id', authenticateToken, getUserDetailsController);

export default router;
