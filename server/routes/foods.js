import express from 'express';
import { getFood, getAllFoods, updateFood, deleteFood, createFood } from '../controllers/foods.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

//CREATE
router.post('/',verifyToken, createFood);

//READ
router.get('/:id', getFood);
router.get('/', getAllFoods);

//UPDATE
router.put('/:id',verifyToken, updateFood);

//DELETE
router.delete('/:id',verifyToken, deleteFood);

export default router;
