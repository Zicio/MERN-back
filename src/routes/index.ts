import express, { Router } from 'express';
import userRouter from './user.js';
import postRouter from './post.js';
import uploadRouter from './upload.js';

const router = Router();

router.use('/user', userRouter);
router.use('/posts', postRouter);
router.use('upload', express.static('static/uploads/images'), uploadRouter);

export default router;
