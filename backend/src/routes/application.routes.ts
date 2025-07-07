import { Router } from 'express';

import { getTaskApplicationsByTaskIdController, acceptTaskController } from '../controllers/application.controller';
import { authenticateToken } from '../middlewares/authentication.middleware';
import { isTasker } from '../middlewares/isTasker.middleware';

const router = Router();

router.get('/:id', authenticateToken, getTaskApplicationsByTaskIdController);
router.patch('/:applicationId/accept', [authenticateToken, isTasker], acceptTaskController);

export default router;