import Link from "next/link";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
  faDribbble,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const listFooter = [
    { icon: faGithub, href: "https://github.com/idadhamz" },
    { icon: faLinkedin, href: "https://www.linkedin.com/in/idadilham/" },
    { icon: faMedium, href: "https://idadilham.medium.com/" },
    { icon: faTwitter, href: "https://twitter.com/Idadilham" },
    { icon: faDribbble, href: "https://dribbble.com/idadhamz" },
    { icon: faInstagram, href: "https://www.instagram.com/idadcode/" },
  ];

  const techStack = [
    {
      text: "Next.js",
      url: "https://nextjs.org/",
    },
    {
      text: "Tailwind CSS",
      url: "https://tailwindcss.com/",
    },
    {
      text: "Forestry IO",
      url: "https://forestry.io/",
    },
    {
      text: "Netlify",
      url: "https://www.netlify.com/",
    },
  ];

  const urlExternal = (text, url) => {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span className="text-sm font-medium text-blue-700 underline sm:text-base dark:text-blue-300">
          {text}
        </span>
      </a>
    );
  };

  const YEAR = new Date().getFullYear();

  return (
    <div className="py-6 space-y-4 sm:p-10">
      <div className="flex flex-col gap-2 p-5 sm:p-0 space-y-4">
        <div className="flex flex-col sm:items-center justify-between sm:flex-row space-y-4">
          <Link href="/">
            <img
              src="/assets/img/fotoVector.jpg"
              alt="foto-dadi-nav"
              className="object-cover h-auto p-2 my-4 border-2 border-gray-300 cursor-pointer w-20 lg:w-20 lg:h-auto rounded-2xl hover:border-green-500"
            />
          </Link>
          <div className="flex flex-row flex-wrap gap-8">
            {listFooter.map((data) => (
              <a
                href={data.href}
                target="_blank"
                rel="noopener noreferrer"
                key={data?.text}
              >
                <FontAwesomeIcon
                  icon={data.icon}
                  className="text-black dark:text-white"
                  style={{
                    fontSize: 30,
                  }}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-4 text-left">
          <p className="text-sm font-medium sm:text-base leading-loose">
            Made using {urlExternal(techStack[0].text, techStack[0].url)},{" "}
            {urlExternal(techStack[1].text, techStack[1].url)} and CMS from{" "}
            {urlExternal(techStack[2].text, techStack[2].url)}. Hosted on{" "}
            {urlExternal(techStack[3].text, techStack[3].url)}.
          </p>
          <p className="text-sm font-medium sm:text-base">
            Code licensed under{" "}
            {urlExternal(
              "MIT License",
              "https://github.com/idadhamz/idadcode-web/blob/main/LICENSE"
            )}
            .
          </p>
          <p className="text-sm font-medium sm:text-base">
            © {YEAR}—Dadi Ilham S. version 1.0
          </p>
        </div>
      </div>
    </div>
  );
}
