import express from 'express';
import { getProducts } from '../Controllers/product.controller.js';

const router = express.Router();

router.get('/products', getProducts);


export default router;