import { Request } from 'express';

export interface IUser {
  email: string;
  username: string;
  password: string;
  avatarUrl?: string;
}

export interface TypedRequestBody<T> extends Request {
  body: T;
}
