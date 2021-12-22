import Link from "next/link";

export default function BackText({ href, text, d_icon }) {
  return (
    <Link href={`/${href}`}>
      <h1 className="mb-10 text-xl antialiased text-gray-700 cursor-pointer lg:text-xl hover:underline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="inline h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={d_icon}
          />
        </svg>
        <span className="px-2 font-normal text-gray-700">{text}</span>
      </h1>
    </Link>
  );
}
