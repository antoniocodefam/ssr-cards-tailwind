import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-indigo-600 p-5 mb-2 md:mb-4">
      <div className="md:container md:mx-auto">
        <ul className="text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
