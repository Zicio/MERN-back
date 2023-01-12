import { Request } from 'express';

export interface IUser {
  email: string;
  userName: string;
  password: string;
  avatarUrl?: string;
}

export interface TypedRequestBody<T> extends Request {
  body: T;
}
