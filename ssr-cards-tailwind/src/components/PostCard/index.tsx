import Image from "next/image";
import { Post } from "../../interfaces/posts";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="card">
      <Image
        src={post.photo.url}
        alt={post.photo.title}
        title={post.photo.title}
        width={300}
        height={300}
      />
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
