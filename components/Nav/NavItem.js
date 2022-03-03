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
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    },
  ];

  return (
    <div>
      {listNavs.map((data, index) => (
        <li
          className={
            router.pathname == data.href
              ? "rounded-xl text-green-700 dark:text-green-400 dark:hover:text-white"
              : ""
          }
          key={index}
        >
          <Link href={data.href}>
            <p className="w-max p-2 font-sans text-xl font-semibold rounded-full cursor-pointer lg:text-xl dark:hover:bg-green-500 hover:bg-green-200 lg:p-4 flex items-center">
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
    </div>
  );
}
