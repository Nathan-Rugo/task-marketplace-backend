import { Router } from "express";
import { getTasks, getTasksById, postTask, applyForTaskController, completeTaskController, confirmPaymentController, cancelTaskController, giveReviewController, approveTaskCompletedController, acceptTaskController } from '../controllers/task.controller';
import { authenticateToken } from "../middlewares/authentication.middleware";
import { isTasker } from "../middlewares/isTasker.middleware";

const router = Router();

router.post('/', authenticateToken, postTask);
router.get('/', [authenticateToken, isTasker], getTasks);
router.get('/:id', authenticateToken, getTasksById);
router.post('/:taskId/apply', [authenticateToken, isTasker], applyForTaskController);
router.patch('/:applicationId/accept', authenticateToken, acceptTaskController);
router.patch('/:id/complete', [authenticateToken, isTasker], completeTaskController);
router.post('/:id/confirm', authenticateToken, confirmPaymentController);
router.patch('/:id/cancel', authenticateToken, cancelTaskController);
router.post('/:taskId/review', authenticateToken, giveReviewController);
router.patch('/:taskId/approve', authenticateToken, approveTaskCompletedController);
export default router;