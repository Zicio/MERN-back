import { ITypedRequestBody } from '../../models/TSModels/general.js';
import { Response } from 'express';

const uploadImage = (req: ITypedRequestBody<any>, res: Response) => {
  res.json({
    url: `static/uploads/images/${req.file?.originalname}`,
  });
};

export default uploadImage;
