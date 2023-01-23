import { validationResult } from 'express-validator';
import { ITypedRequestBody } from '../../models/TSModels/general.js';
import { NextFunction, Response } from 'express';

export default (
  req: ITypedRequestBody<unknown>,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
