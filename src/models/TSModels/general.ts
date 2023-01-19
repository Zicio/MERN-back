import { Request } from 'express';

export interface IDoc<T> {
  _doc: T;
}

export interface ITypedRequestBody<T> extends Request {
  userId?: string;
  body: T;
}
