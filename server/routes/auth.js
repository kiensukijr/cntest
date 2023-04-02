import express from 'express';
import { register, login, loginAdmin } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login/admin', loginAdmin);
router.post('/login', login);

export default router;