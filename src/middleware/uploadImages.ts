import multer from 'multer';
import path from 'path';
import { Request } from 'express';

const storage = multer.diskStorage({
  destination(req: Request, file: Express.Multer.File, cb) {
    cb(null, 'src/uploads/images');
  },
  filename(req: Request, file: Express.Multer.File, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
    // req.body.fileName = file.originalname; TODO
  },
});

const upload = multer({ storage });

export default upload;
