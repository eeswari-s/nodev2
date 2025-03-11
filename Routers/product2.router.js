import express from 'express';

const router = express.Router();

router.get('/example', (req, res) => {
    res.status(200).send('Example Route')
});

// Task 1 - /Product -> "Product Route"


export default router;