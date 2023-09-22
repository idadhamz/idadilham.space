import React from "react";

import urlExternal from "helpers/urlExternal";
import socMed from "@/data/socMed";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConnectMe = () => {
  return (
    <div>
      <h1 className="mb-10 text-2xl antialiased sm:text-4xl">
        <span className="font-semibold text-green-700 dark:text-green-400">
          Connect Me
        </span>
      </h1>
      <div className="w-full space-y-6 sm:w-4/5">
        <ul className="space-y-2">
          {socMed.map((item) => (
            <li
              className="text-base antialiased tracking-wide sm:text-lg flex gap-4 items-center"
              key={item}
            >
              <div
                className="flex justify-center items-center"
                style={{ width: "25px" }}
              >
                <FontAwesomeIcon
                  icon={item.name}
                  className="text-black dark:text-white"
                  style={{
                    fontSize: 20,
                  }}
                />
              </div>
              {urlExternal(item.text, item.url)}
            </li>
          ))}
        </ul>
        <h2 className="text-base antialiased tracking-wide sm:text-lg">
          Or you can reach me via email at{" "}
          {urlExternal(
            "workwithdadi@gmail.com",
            "mailto:workwithdadi@gmail.com"
          )}
          . I really look forward to collaborating with you guys in the future.
          Anyway, thanks for visiting my website 😉🙏
        </h2>
      </div>
    </div>
  );
};

export default ConnectMe;
