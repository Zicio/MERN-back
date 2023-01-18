import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IDecodedToken, ITypedRequestBody } from '../models/modelsTS.js';

export default (
  req: ITypedRequestBody<undefined>,
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
