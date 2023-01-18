import { Request } from 'express';
import { Document } from 'mongoose';
import { JwtPayload } from 'jsonwebtoken';

export interface IUserDoc<T> {
  _doc: T;
}

export interface IUser extends IUserDoc<IUser> {
  email: string;
  userName: string;
  password: string;
  avatarUrl?: string;
}

export interface IUserModel extends IUser, Document {}

export interface ITypedRequestBody<T> extends Request {
  userId?: string;
  body: T;
}

export interface IDecodedToken extends JwtPayload {
  _id: string;
}
