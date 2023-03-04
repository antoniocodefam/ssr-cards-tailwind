import { Post } from "../../../interfaces/posts";
import PostCard from "../../PostCard";

export interface HomeCardsProps {
  posts: Post[];
}
export default function HomeCards({ posts }: HomeCardsProps) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-6 justify-center">
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
