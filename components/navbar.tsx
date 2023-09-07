import Link from "next/link";

export default function Navbar() {
  return (
    <main className="flex justify-end items-center text-xl bg-ctp-base">
      <Link href="#Home">
        <button className="m-4">Home</button>
      </Link>
      <Link href="#AboutMe">
        <button className="m-4">About</button>
      </Link>
      <button className="m-4">Skills</button>
      <button className="m-4">Projects</button>
      <div className="w-8"></div>
    </main>
  );
}
