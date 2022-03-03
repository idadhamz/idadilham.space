import Layout from "@/components/layout";

export default function About() {
  const data = {
    title: "About | Idadilham",
    description:
      "About of Dadi Ilham S, Say Hello! If you want to talk to me about something that could interest me, you can send me message to @idadcode instagram.",
    url: "https://idadilham.space/about",
  };

  const urlExternal = (text, url) => {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span className="text-blue-700 underline dark:text-blue-300">
          {text}
        </span>
      </a>
    );
  };

  const socMed = [
    {
      id: 1,
      name: "Github",
      text: "github.com/idadhamz",
      url: "https://github.com/idadhamz",
    },
    {
      id: 2,
      name: "LinkedIn",
      text: "linkedin.com/in/idadilham",
      url: "https://www.linkedin.com/in/idadilham/",
    },
    {
      id: 3,
      name: "Medium",
      text: "idadilham.medium.com",
      url: "https://idadilham.medium.com/",
    },
    {
      id: 4,
      name: "Twitter",
      text: "twitter.com/Idadilham",
      url: "https://twitter.com/Idadilham",
    },
    {
      id: 5,
      name: "Dribble",
      text: "dribbble.com/idadhamz",
      url: "https://dribbble.com/idadhamz",
    },
    {
      id: 6,
      name: "Instagram",
      text: "instagram.com/idadcode",
      url: "https://www.instagram.com/idadcode/",
    },
  ];

  return (
    <Layout data={data}>
      <div className="py-12 space-y-12">
        <div className="px-5 lg:px-12">
          <h1 className="mb-10 text-2xl antialiased sm:text-4xl">
            <span className="font-semibold text-green-700 dark:text-green-400">
              About
            </span>
          </h1>
          <div className="w-full space-y-6 sm:w-4/5">
            <img
              src="/assets/img/fotoDadi.jfif"
              alt="fotoHero"
              className="object-cover h-auto w-60 lg:w-80 rounded-xl"
            />
            <h2 className="text-base antialiased tracking-wide sm:text-lg">
              Hola! My name is <b>Dadi Ilham Setiadi</b> and you can call me{" "}
              <b>Dad</b> or <b>Dadi</b>.
            </h2>
            <h2 className="text-base antialiased tracking-wide sm:text-lg">
              Now i'm living in <b>DKI Jakarta, Indonesia</b>. I have a passion
              in software engineering especially in website developers, and know
              i'm studying frontend things from HTML, CSS, Javascript and their
              framework CSS or Javascript. Currently i'm doing remote web dev
              work for{" "}
              {urlExternal(
                "DDB (Direktorat Digital Business)",
                "https://internship.ddbtelkom.id/"
              )}{" "}
              Telkom Indonesia for 6 months and studying with final student
              status in{" "}
              {urlExternal(
                "UIN Syarif Hidayatullah Jakarta",
                "https://www.uinjkt.ac.id/"
              )}
              .
            </h2>
            <h2 className="text-base antialiased tracking-wide sm:text-lg">
              In daily activities I have enjoyed to exploring tech related
              stuff, and reading a current technological developments. Outside
              of related software engineering, I like to watching movies/TV
              Series or Korean Drama and traveling to many places from
              recomendation in Social Media for take a picture with family or
              friends.
            </h2>
          </div>
        </div>
        <div className="px-5 lg:px-12">
          <h1 className="mb-10 text-2xl antialiased sm:text-4xl">
            <span className="font-semibold text-green-700 dark:text-green-400">
              Contact
            </span>
          </h1>
          <div className="w-full space-y-6 sm:w-4/5">
            <ul className="space-y-2">
              {socMed.map((item) => (
                <li className="text-base antialiased tracking-wide sm:text-lg">
                  {item.name} - {urlExternal(item.text, item.url)}
                </li>
              ))}
            </ul>
            <h2 className="text-base antialiased tracking-wide sm:text-lg">
              Or you can reach me via email at{" "}
              {urlExternal(
                "dadiilhamsetiadii@gmail.com",
                "mailto:dadiilhamsetiadii@gmail.com"
              )}
              . I really look forward to collaborating with you guys in the
              future. Anyway, thanks for visiting my website 😉🙏
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}
