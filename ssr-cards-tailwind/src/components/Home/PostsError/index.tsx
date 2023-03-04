export default function HomePostsError() {
  return (
    <div className="flex justify-center">
      <div className=" bg-red-500 p-6 rounded-md shadow-md text-white w-auto">
        <p>An error happened while loading posts</p>
      </div>
    </div>
  );
}
