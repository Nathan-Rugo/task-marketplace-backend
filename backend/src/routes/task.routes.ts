import { Router } from "express";
import { getTasks, getTasksById, postTask, applyForTaskController, completeTaskController, getTaskApplicationsByTaskIdController, confirmPaymentController} from '../controllers/task.controller';
import { authenticateToken } from "../middlewares/authentication.middleware";

const router = Router();

router.post('/', authenticateToken, postTask);
router.get('/', authenticateToken, getTasks);
router.get('/:id', authenticateToken, getTasksById);
router.post('/:taskId/apply', authenticateToken, applyForTaskController);
router.patch('/:id/complete', authenticateToken, completeTaskController);
router.post('/:id/confirm', authenticateToken, confirmPaymentController);
router.get('/:taskId/applications', authenticateToken, getTaskApplicationsByTaskIdController);


export default router;