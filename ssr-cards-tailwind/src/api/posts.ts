import { Post } from "../interfaces/posts";
import { Response } from ".";

export interface PostsResponse extends Response<Post[]> {}
