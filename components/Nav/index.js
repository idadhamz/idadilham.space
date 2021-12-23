import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

import NavContent from "@/components/Nav/NavItem";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <ul className="hidden p-10 lg:fixed lg:flex lg:flex-col lg:justify-between lg:h-full">
        <div>
          <Link href="/">
            <img
              src="/assets/img/fotoVector.jpg"
              alt="foto-dadi-nav"
              className="object-cover w-20 h-auto p-2 my-4 border-2 border-gray-300 cursor-pointer lg:w-20 lg:h-auto lg:m-4 rounded-2xl hover:border-green-500"
            ></img>
          </Link>
          <NavContent />
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-full p-2 font-sans text-xl font-bold cursor-pointer lg:text-xl lg:p-4 flex items-center hover:underline"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}{" "}
          <span className="px-5 capitalize">{theme} Mode</span>
        </button>
      </ul>
      <div className="flex items-center justify-between px-5 py-5 lg:hidden">
        <div>
          <Link href="/">
            <img
              src="/assets/img/fotoVector.jpg"
              alt="foto-dadi-nav"
              className="object-cover w-20 h-auto p-2 my-4 border border-gray-300 cursor-pointer lg:w-20 lg:h-auto lg:m-4 rounded-2xl hover:border-green-700"
            ></img>
          </Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center p-5 text-gray-800 rounded-md dark:text-white focus:outline-none"
          aria-label="Burger Menu"
        >
          <img
            src={`/assets/img/${open ? "closeMenu" : "openMenu"}.svg`}
            alt={`${open ? "open" : "close"} menu`}
            width={30}
            height={30}
          />
        </button>
      </div>
      <ul className={open ? "px-5 py-3 block" : "hidden"}>
        <NavContent />
      </ul>
    </div>
  );
}
