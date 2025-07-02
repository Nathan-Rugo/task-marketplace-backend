import { Router } from "express";
import { getTasks, getTasksById, postTask, applyForTaskController, completeTaskController, confirmPaymentController } from '../controllers/task.controller';
import { authenticateToken } from "../middlewares/authentication.middleware";
import { isTasker } from "../middlewares/isTasker.middleware";

const router = Router();

router.post('/', authenticateToken, postTask);
router.get('/', [authenticateToken, isTasker], getTasks);
router.get('/:id', authenticateToken, getTasksById);
router.post('/:taskId/apply', [authenticateToken, isTasker], applyForTaskController);
router.patch('/:id/complete', [authenticateToken, isTasker], completeTaskController);
router.post('/:id/confirm', authenticateToken, confirmPaymentController);

export default router;