import Link from "next/link";

export default function SeeAll({ href, text, d_icon }) {
  return (
    <Link href={`/${href}`}>
      <h1 className="text-xl antialiased cursor-pointer lg:text-xl hover:underline">
        <span className="px-2 font-normal">{text}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={d_icon}
          />
        </svg>
      </h1>
    </Link>
  );
}
