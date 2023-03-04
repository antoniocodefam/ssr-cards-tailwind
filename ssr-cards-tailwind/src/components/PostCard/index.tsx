import Image from "next/image";
import { Post } from "../../interfaces/posts";
import styles from "./PostCard.module.scss";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div
      className={`${styles.card} flex flex-col w-80 shadow-md h-full bg-slate-50 rounded-md`}
    >
      <div className={styles.image}>
        <Image
          src={post.photo.url}
          alt={post.photo.title}
          title={post.photo.title}
          width={320}
          height={300}
          className="rounded-t-md"
        />
      </div>
      <div className="p-3">
        <h3 className="text-lg mb-2 uppercase">{post.title}</h3>
        <p className="text-sm text-slate-700">{post.body}</p>
      </div>
    </div>
  );
}
