import HomeCards, { HomeCardsProps } from "./Cards";
import HomePostsError from "./PostsError";

export interface HomeProps extends HomeCardsProps {
  error: boolean;
}

export default function Home({ posts, error }: HomeProps) {
  return (
    <>
      <h1 className="text-4xl text-center mb-5 md:mb-10">Posts overview</h1>
      {!error ? <HomePostsError /> : <HomeCards posts={posts} />}
    </>
  );
}
