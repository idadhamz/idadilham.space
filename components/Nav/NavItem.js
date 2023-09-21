import Link from "next/link";
import { useRouter } from "next/router";

export default function NavContent() {
  const router = useRouter();

  const listNavs = [
    {
      text: "Home",
      href: "/",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      text: "Portofolio",
      href: "/portofolio",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    },
    {
      text: "Blog",
      href: "/blog",
      icon: "M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
    {
      text: "About",
      href: "/about",
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    },
  ];

  return <>
    {listNavs.map((data) => (
      <li
        className={
          router.pathname == data.href
            ? "text-green-400 dark:hover:text-white font-bold"
            : "text-black dark:text-white dark:hover:text-green-400 hover:text-green-400  font-normal"
        }
        key={data?.text}
      >
        <Link href={data.href} legacyBehavior>
          <p className="w-max p-1 font-sans text-lg sm:text-xl cursor-pointer flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={data.icon}
              />
            </svg>
            <span className="px-5">{data.text}</span>
          </p>
        </Link>
      </li>
    ))}
  </>;
}
