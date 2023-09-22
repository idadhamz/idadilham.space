import Link from "next/link";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLaptopCode,
  faBookmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function NavContent() {
  const router = useRouter();

  const listNavs = [
    {
      text: "Home",
      href: "/",
      icon: faHome,
    },
    {
      text: "Portofolio",
      href: "/portofolio",
      icon: faLaptopCode,
    },
    {
      text: "Blog",
      href: "/blog",
      icon: faBookmark,
    },
    {
      text: "About",
      href: "/about",
      icon: faUser,
    },
  ];

  return (
    <>
      {listNavs.map((data) => (
        <li key={data?.text} className="hover:underline">
          <Link href={data.href} legacyBehavior>
            <p className="w-max py-1.5 font-sans text-lg sm:text-xl cursor-pointer flex items-center">
              <div
                className="flex justify-center items-center"
                style={{ width: "25px" }}
              >
                <FontAwesomeIcon
                  icon={data.icon}
                  className={
                    router.pathname == data.href
                      ? "text-green-700 dark:text-green-400"
                      : "text-black dark:text-white"
                  }
                  style={{
                    fontSize: 20,
                  }}
                />
              </div>
              <span
                className={
                  router.pathname == data.href
                    ? "text-green-700 dark:text-green-400 font-bold px-5"
                    : "text-black dark:text-white font-normal px-5"
                }
              >
                {data.text}
              </span>
            </p>
          </Link>
        </li>
      ))}
    </>
  );
}
