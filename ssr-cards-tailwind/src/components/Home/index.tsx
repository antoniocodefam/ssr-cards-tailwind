import { Post } from "../../interfaces/posts";
import PostCard from "../PostCard";

export interface HomeProps {
  posts: Post[];
  error: boolean;
}

export default function Home({ posts, error }: HomeProps) {
  return (
    <>
      <h1 className="text-4xl text-center mb-5 md:mb-10">Posts overview</h1>
      <ul className="flex flex-wrap gap-x-3 gap-y-6 justify-center">
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </>
  );
}
