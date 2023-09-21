import Link from "next/link";

export default function SeeAll({ href, text, d_icon }) {
  return (
    <Link href={`/${href}`} legacyBehavior>
      <h1 className="text-xs antialiased cursor-pointer lg:text-lg hover:underline">
        <span className="px-2 font-normal">{text}</span>
      </h1>
    </Link>
  );
}
