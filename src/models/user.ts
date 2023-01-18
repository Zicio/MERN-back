import { model, Schema } from 'mongoose';
import { IUserModel } from './modelsTS.js';

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatarUrl: String,
  },
  {
    timestamps: true,
  },
);

const User = model<IUserModel>('User', userSchema);

export default User;
