import { Document } from 'mongoose';

export interface IPost {
  title: string;
  text: string;
  tags?: string[];
  user: string;
  imageUrl?: string;
  viewCount?: number;
}

export interface IPostModel extends IPost, Document {}
