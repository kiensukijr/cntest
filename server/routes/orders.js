import express from 'express';
import { createOrder, getAllOrders } from '../controllers/orders.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

//create
router.post('/',verifyToken, createOrder);

//read 
router.get('/',verifyToken, getAllOrders);

export default router;