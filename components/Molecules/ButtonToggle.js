import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ButtonToggle({ theme, setTheme }) {
  return (
    <>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="flex items-center w-full py-2 font-sans text-xl cursor-pointer lg:text-xl lg:p-4 hover:underline"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <div
          className="flex justify-center items-center"
          style={{ width: "25px" }}
        >
          <FontAwesomeIcon
            icon={theme === "dark" ? faMoon : faSun}
            className="text-black dark:text-white"
            style={{
              fontSize: 20,
            }}
          />
        </div>
        <span className="hidden lg:block px-5 capitalize">{theme} Mode</span>
      </button>
    </>
  );
}
