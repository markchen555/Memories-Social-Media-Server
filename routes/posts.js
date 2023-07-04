import express from 'express';

const router = express.Router();

// prefix: /posts
router.get('/', (req, res) => {
	res.send('This works')
});


export default router;