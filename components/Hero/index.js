import urlExternal from "helpers/urlExternal";

export default function Hero() {
  const listInterest = ["Software Engineer", "UI/UX Enthusiast"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <div className="col-span-1">
        <img
          src="/assets/img/fotoDadi.jfif"
          alt="fotoHero"
          className="object-cover h-auto w-60 lg:w-full rounded-xl"
        />
      </div>
      <div className="col-span-3 lg:my-auto">
        <div className="my-10 lg:space-y-6 lg:my-auto lg:mx-20">
          <div className="my-6 space-x-2">
            {listInterest.map((item, idx) => (
              <span
                className="w-full px-4 py-2 text-xs font-semibold text-white bg-green-500 sm:text-sm lg:text-base rounded-2xl"
                key={idx}
              >
                {item}
              </span>
            ))}
          </div>
          <h1 className="my-5 text-2xl antialiased lg:text-4xl">
            <span className="font-semibold">Dadi Ilham Setiadi</span>
          </h1>
          <p className="text-base sm:leading-relaxed sm:text-lg">
            An Information Systems final year student at{" "}
            {urlExternal(
              "UIN Syarif Hidayatullah Jakarta",
              "https://www.uinjkt.ac.id/"
            )}{" "}
            and tech enthusiast who passionate about developing application
            especially web based and also have experience in UI/UX design works.
            Hard-working person, teamwork oriented and love to explore and learn
            new things about digital and technology. <br></br>
            <br></br>
            Let's get acquainted with me through{" "}
            {urlExternal(
              "LinkedIn",
              "https://www.linkedin.com/in/idadilham/"
            )}{" "}
            or {urlExternal("Instagram", "https://www.instagram.com/idadcode/")}
          </p>
        </div>
      </div>
    </div>
  );
}
