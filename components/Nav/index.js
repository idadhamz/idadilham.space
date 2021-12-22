import Link from "next/link";
import { useState } from "react";

import NavContent from "@/components/Nav/NavItem";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ul className="hidden p-10 lg:block lg:fixed">
        <Link href="/">
          <img
            src="/assets/img/fotoVector.jpg"
            alt="foto-dadi-nav"
            className="object-cover w-20 h-auto p-2 my-4 border-2 border-gray-300 cursor-pointer lg:w-20 lg:h-auto lg:m-4 rounded-2xl hover:border-green-500"
          ></img>
        </Link>
        <NavContent />
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
