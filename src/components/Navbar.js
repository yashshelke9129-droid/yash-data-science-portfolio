import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-5 flex justify-between items-center border-b border-gray-800">

      <h1 className="text-2xl font-bold text-blue-500">
        YS
      </h1>

      <ul className="flex gap-6 text-lg">

        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/projects">Projects</Link>
        </li>

        <li>
          <Link href="/resume">Resume</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>

      </ul>

    </nav>
  );
}