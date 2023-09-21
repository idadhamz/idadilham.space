import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

import NavContent from "@/components/Nav/NavItem";
import ButtonToggle from "../Molecules/ButtonToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <ul className="hidden p-10 lg:fixed lg:flex lg:flex-col lg:justify-between lg:h-full">
        <div className="space-y-2">
          {/* <Link href="/">
            <img
              src="/assets/img/fotoVector.jpg"
              alt="foto-dadi-nav"
              className="object-cover w-20 h-auto p-2 my-4 border-2 border-gray-300 cursor-pointer lg:w-20 lg:h-auto lg:m-4 rounded-2xl hover:border-green-500"
            ></img>
          </Link> */}
          <NavContent />
        </div>
        <ButtonToggle theme={theme} setTheme={setTheme} />
      </ul>
      <div className="flex items-center justify-between px-5 py-5 lg:hidden">
        <div>
          <Link href="/">
            <img
              src="/assets/img/fotoVector.jpg"
              alt="foto-dadi-nav"
              className="object-cover w-12 h-auto my-4 cursor-pointer lg:w-20 lg:h-auto lg:m-4 rounded-lg hover:border-green-700"
            ></img>
          </Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center p-5 text-gray-800 rounded-md dark:text-white focus:outline-none"
          aria-label="Burger Menu"
        >
          <svg
            className="w-8 h-8 text-black dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      <ul className={open ? "px-5 py-3 block space-y-2" : "hidden"}>
        <NavContent />
        <ButtonToggle theme={theme} setTheme={setTheme} />
      </ul>
    </div>
  );
}
