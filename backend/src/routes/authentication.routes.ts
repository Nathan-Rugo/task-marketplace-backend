import { Router } from 'express';
import { googleLogin, googleSignup, login, signup, validateToken } from '../controllers/authentication.controller';

const router = Router();

router.post('/signup', signup);
router.post('/google-signup', googleSignup);
router.post('/google-login', googleLogin);
router.post('/login', login);
router.get('/validate-token', validateToken)

export default router;
