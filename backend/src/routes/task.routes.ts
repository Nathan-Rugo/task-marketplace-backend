import { Router } from "express";
import { acceptTaskController, getTasks, getTasksById, postTask, applyForTaskController, completeTaskController } from '../controllers/task.controller';
import { authenticateToken } from "../middlewares/authentication.middleware";

const router = Router();

router.post('/', authenticateToken, postTask);
router.get('/', authenticateToken, getTasks);
router.get('/:id', authenticateToken, getTasksById);
router.patch('/:applicationId/accept', authenticateToken, acceptTaskController);
router.post('/:taskId/apply', authenticateToken, applyForTaskController);
router.put('/:id/complete', authenticateToken, completeTaskController);

export default router;