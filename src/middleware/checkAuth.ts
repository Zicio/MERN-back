import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IDecodedToken } from '../models/TSModels/user.js';
import { ITypedRequestBody } from '../models/TSModels/general.js';

export default (
  req: ITypedRequestBody<unknown>,
  res: Response,
  next: NextFunction,
) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
  try {
    const decoded = <IDecodedToken>(
      jwt.verify(token, process.env.JWT_KEY as string)
    );
    req.userId = decoded._id;
    next();
  } catch (e) {
    console.log(e as Error);
    res.status(403).json({
      message: 'Нет доступа',
    });
  }
};
