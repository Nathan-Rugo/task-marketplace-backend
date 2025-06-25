import { Router } from "express";
import { acceptTaskController, getTasks, getTasksById, postTask, applyForTaskController, completeTaskController, confirmPaymentController} from '../controllers/task.controller';
import { authenticateToken } from "../middlewares/authentication.middleware";

const router = Router();

router.post('/', authenticateToken, postTask);
router.get('/', authenticateToken, getTasks);
router.get('/:id', authenticateToken, getTasksById);
router.patch('/:applicationId/accept', authenticateToken, acceptTaskController);
router.post('/:taskId/apply', authenticateToken, applyForTaskController);
router.patch('/:id/complete', authenticateToken, completeTaskController);
router.post('/:id/confirm', authenticateToken, confirmPaymentController);


export default router;