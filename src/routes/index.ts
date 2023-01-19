import { Router } from 'express';
import userRouter from './user.js';
import postRouter from './post.js';

const router = Router();

router.use('/user', userRouter);
router.use('/posts', postRouter);

export default router;
