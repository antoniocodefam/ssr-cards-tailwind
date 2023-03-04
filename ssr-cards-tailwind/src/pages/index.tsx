import { PhotosReponse } from "../api/photos";
import { PostsResponse } from "../api/posts";
import Home, { HomeProps } from "../components/Home";
import { HOME_CARDS_PER_PAGE } from "../components/Home/Cards";

export default function HomePage(props: HomeProps) {
  return <Home {...props} />;
}

export async function getServerSideProps(ctx) {
  let posts = [];
  let error = false;

  try {
    const res = Promise.all([
      fetch(`${process.env.SERVER}/api/posts`),
      fetch(`${process.env.SERVER}/api/photos`),
    ]);

    const [postsRes, photosRes] = await res;

    const postsData: PostsResponse = await postsRes.json();
    const photosData: PhotosReponse = await photosRes.json();

    posts = postsData.data.map((post) => ({
      ...post,
      photo: photosData.data.find((photo) => photo.id === post.id),
    }));
  } catch {
    error = true;
  }

  return {
    props: {
      posts,
      error,
      page: +ctx.query.page || 1,
      totalPages: Math.ceil(posts.length / HOME_CARDS_PER_PAGE),
    },
  };
}
