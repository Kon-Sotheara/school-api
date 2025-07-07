import express from 'express';
import {
    register,
    login,
    user
} from '../controllers/auth.controller.js'
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', authenticateToken, user);

export default router;