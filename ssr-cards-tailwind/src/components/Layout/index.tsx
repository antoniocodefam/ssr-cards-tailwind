import Header from "../Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="md:container md:mx-auto px-3 md:px-5 lg:px-0">
        {children}
      </main>
    </>
  );
}
