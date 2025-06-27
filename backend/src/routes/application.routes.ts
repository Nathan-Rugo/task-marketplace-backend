import { Router } from 'express';

import { acceptTaskController } from '../controllers/application.controller';
import { authenticateToken } from '../middlewares/authentication.middleware';

const router = Router();

router.patch('/:applicationId/accept', authenticateToken, acceptTaskController);

export default router;