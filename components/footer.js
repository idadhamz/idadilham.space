import Link from "next/link";

export default function Footer() {
  const listFooter = [
    { text: "Instagram", href: "https://www.instagram.com/idadcode/" },
    { text: "Twitter", href: "https://twitter.com/Idadilham" },
    { text: "Github", href: "https://github.com/idadhamz" },
    { text: "Medium", href: "https://idadilham.medium.com/" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/idadilham/" },
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
          {/* <Link href="/">
            <img
              src="/assets/img/fotoVector.jpg"
              alt="foto-dadi-nav"
              className="object-cover h-auto p-2 my-4 border-2 border-gray-300 cursor-pointer w-28 lg:w-28 lg:h-auto rounded-2xl hover:border-green-500"
            />
          </Link> */}
          <div className="flex flex-row gap-4">
            {listFooter.map((data) => (
              <a
                href={data.href}
                target="_blank"
                rel="noopener noreferrer"
                key={data?.text}
              >
                <h1 className="text-sm font-medium cursor-pointer sm:text-base hover:text-green-500">
                  {data.text}
                </h1>
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
