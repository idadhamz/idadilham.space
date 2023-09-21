import urlExternal from "helpers/urlExternal";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <div className="col-span-1">
        <img
          src="/assets/img/fotoDadi.jfif"
          alt="fotoHero"
          className="object-cover h-auto w-60 lg:w-auto rounded-xl"
        />
      </div>
      <div className="col-span-3 lg:my-auto">
        <div className="my-10 lg:space-y-6 lg:my-auto lg:px-20">
          {/* <div className="my-6 space-x-2">
            {listInterest.map((item, idx) => (
              <span
                className="w-full px-4 py-2 text-xs font-semibold text-white bg-green-500 sm:text-sm lg:text-base rounded-2xl"
                key={idx}
              >
                {item}
              </span>
            ))}
          </div> */}
          <h1 className="my-5 text-xl antialiased lg:text-2xl">
            <span className="font-semibold tracking-wide">
              Hi👋, I'm Dadi Ilham S
            </span>
          </h1>
          <p className="text-base text-justify sm:leading-relaxed sm:text-lg">
            An Information Systems final year student from{" "}
            {urlExternal("UIN Jakarta", "https://www.uinjkt.ac.id/")} Passionate
            about developing applications, especially experience with build
            web-based, and also logical thinking for data processing
            <br />
            <br />
            🔭 I'm currently working on{" "}
            {urlExternal(
              "PT Mandala Multifinance",
              "https://mandalafinance.com/"
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
