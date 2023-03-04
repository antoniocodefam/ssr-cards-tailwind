import { Post } from "../../interfaces/posts";
import PostCard from "../PostCard";

export interface HomeProps {
  posts: Post[];
  error: boolean;
}

export default function Home({ posts, error }: HomeProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
