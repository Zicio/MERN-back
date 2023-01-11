import { Document, model, Schema } from 'mongoose';
import { IUser } from './modelsTS.js';

type UserType = IUser & Document;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    avatarUrl: String,
  },
  {
    timestamps: true,
  },
);

const User = model<UserType>('User', userSchema);

export default User;
