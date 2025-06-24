import express, { Router } from 'express';
import { googleLogin, googleSignup, login, signup, validateToken, logout } from '../controllers/authentication.controller';
import { authenticateToken } from '../middlewares/authentication.middleware';

const router = Router();

router.post('/signup', signup);
router.post('/google-signup', googleSignup);
router.post('/google-login', googleLogin);
router.post('/login', login);
router.get('/validate-token', validateToken);
router.post('/logout', express.json({ strict: false }), authenticateToken, logout); // No body requied

export default router;
