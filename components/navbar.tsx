import Link from "next/link";

export default function Navbar() {
  return (
    <main className="flex justify-end items-center text-xl bg-ctp-base">
      <Link href="#home">
        <button className="m-4">Home</button>
      </Link>
      <Link href="#aboutme">
        <button className="m-4">About</button>
      </Link>
      <Link href="#skills">
        <button className="m-4">Skills</button>
      </Link>
      <Link href="#projects">
        <button className="m-4">Projects</button>
      </Link>
      <div className="w-8"></div>
    </main>
  );
}
