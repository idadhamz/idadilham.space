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
        <span className="text-lg font-medium text-blue-500 underline">
          {text}
        </span>
      </a>
    );
  };

  const YEAR = new Date().getFullYear();

  return (
    <div className="py-12 space-y-4 border-t border-gray-200 sm:p-10">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <Link href="/">
            <img
              src="/assets/img/fotoVector.jpg"
              alt="foto-dadi-nav"
              className="object-cover w-20 h-auto p-2 my-4 border-2 border-gray-300 cursor-pointer lg:w-20 lg:h-auto rounded-2xl hover:border-green-500"
            />
          </Link>
          <div className="flex flex-row gap-4">
            {listFooter.map((data, index) => (
              <a
                href={data.href}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <h1 className="text-lg font-medium cursor-pointer hover:text-green-500">
                  {data.text}
                </h1>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col p-4 space-y-2 text-center sm:text-left sm:p-0">
          <p className="text-lg font-medium">
            Made using {urlExternal(techStack[0].text, techStack[0].url)},{" "}
            {urlExternal(techStack[1].text, techStack[1].url)} and CMS from{" "}
            {urlExternal(techStack[2].text, techStack[2].url)}. Hosted on{" "}
            {urlExternal(techStack[3].text, techStack[3].url)}.
          </p>
          <p className="text-lg font-medium">
            Code licensed under{" "}
            {urlExternal(
              "MIT License",
              "https://github.com/idadhamz/idadcode-web/blob/main/LICENSE"
            )}
            .
          </p>
          <p className="text-lg font-medium">
            © {YEAR}—Dadi Ilham S. version 1.0
          </p>
        </div>
      </div>
    </div>
  );
}
