import { Post } from "../../../interfaces/posts";
import PostCard from "../../PostCard";

export interface HomeCardsProps {
  posts: Post[];
}
export default function HomeCards({ posts }: HomeCardsProps) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-6 justify-center" title="Posts">
      {posts.map((post) => (
        <li key={post.id} title={post.title}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}

export const HOME_CARDS_PER_PAGE = 8;
