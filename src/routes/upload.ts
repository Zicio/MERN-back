import { Router } from 'express';
import upload from '../middleware/uploadImages.js';
import checkAuth from '../middleware/checkAuth.js';
import uploadImage from '../controllers/upload/uploadImage.js';

const uploadRouter = Router();

uploadRouter.post('/', checkAuth, upload.single('image'), uploadImage);

export default uploadRouter;
