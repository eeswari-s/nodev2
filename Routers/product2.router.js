import express from 'express';

const router = express.Router();

router.get('/example', (req, res) => {
    res.status(200).send('welcome to product 2');
});

export default router;