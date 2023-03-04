import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Post } from "../../interfaces/posts";
import Pager, { PagerProps } from "../Pager";
import HomeCards, { HomeCardsProps, HOME_CARDS_PER_PAGE } from "./Cards";
import HomePostsError from "./PostsError";

export interface HomeProps extends HomeCardsProps, PagerProps {
  error: boolean;
}

export default function Home({ posts, error, page, totalPages }: HomeProps) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(page);
  const [currentPosts, setCurrentPosts] = useState<Post[]>(
    calculateCurrentPosts(posts, page)
  );

  useEffect(() => {
    if (router.query.page !== currentPage.toString()) {
      setCurrentPage(+router.query.page);
      setCurrentPosts(calculateCurrentPosts(posts, currentPage));
    }
  }, [router.query.page]);

  return (
    <>
      <h1 className="text-4xl text-center mb-5 md:mb-10">Posts overview</h1>
      {error ? (
        <HomePostsError />
      ) : (
        <>
          <HomeCards posts={currentPosts} />
          <Pager page={currentPage} totalPages={totalPages} />
        </>
      )}
    </>
  );
}

// Calculates posts for the current page.
function calculateCurrentPosts(posts: Post[], page: number) {
  return posts.slice(
    (page - 1) * HOME_CARDS_PER_PAGE,
    page * HOME_CARDS_PER_PAGE
  );
}
