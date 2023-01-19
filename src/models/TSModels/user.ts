import { Document } from 'mongoose';
import { JwtPayload } from 'jsonwebtoken';
import { IDoc } from './general.js';

export interface IUser extends IDoc<IUser> {
  email: string;
  password: string;
  userName?: string;
  avatarUrl?: string;
}

export interface IUserModel extends IUser, Document {}

export interface IDecodedToken extends JwtPayload {
  _id: string;
}
