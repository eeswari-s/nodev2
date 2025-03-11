import express from 'express';
import { getEmployees } from '../Controllers/employee.controller.js';

const router = express.Router();

router.get('/examp', (req, res) => {
    res.status(200).send('Hello World!');
})

router.get('/employees', getEmployees);

    

export default router;