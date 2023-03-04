import { Photo } from "./photos";

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  photo: Photo;
}
