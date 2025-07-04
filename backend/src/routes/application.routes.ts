import { Router } from 'express';

import { getTaskApplicationsByTaskIdController } from '../controllers/application.controller';
import { authenticateToken } from '../middlewares/authentication.middleware';

const router = Router();

router.get('/:id', authenticateToken, getTaskApplicationsByTaskIdController);

export default router;