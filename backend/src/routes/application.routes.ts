import { Router } from 'express';

import { acceptTaskController, getTaskApplicationsByTaskIdController } from '../controllers/application.controller';
import { authenticateToken } from '../middlewares/authentication.middleware';

const router = Router();

router.patch('/:applicationId/accept', authenticateToken, acceptTaskController);
router.get('/:id', authenticateToken, getTaskApplicationsByTaskIdController);

export default router;