export interface IPost {
  title: string;
  text: string;
  tags?: string[];
  user: string;
  imageUrl?: string;
  viewCount?: number;
}
