import express from 'express';
import { getFood, getAllFoods, updateFood, deleteFood, createFood, deleteFoods, getFoodCategories } from '../controllers/foods.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

//CREATE
router.post('/', verifyToken, createFood);

//READ
router.get('/categories', getFoodCategories);
router.get('/:id', getFood);
router.get('/', getAllFoods);

//UPDATE
router.put('/:id', verifyToken, updateFood);

//DELETE
router.delete('/:id', verifyToken, deleteFood);
router.delete('/', verifyToken, deleteFoods);

export default router;
