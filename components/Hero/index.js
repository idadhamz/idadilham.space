export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <div className="col-span-1">
        <img
          src="/assets/img/fotoDadi.jfif"
          alt="fotoHero"
          className="object-cover h-auto w-60 lg:w-80 rounded-xl"
        />
      </div>
      <div className="col-span-3 lg:my-auto">
        <div className="my-10 lg:space-y-6 lg:my-auto lg:mx-20">
          <div className="my-6 space-x-2">
            <span className="w-full px-4 py-2 text-xs sm:text-sm lg:text-base font-semibold text-white bg-indigo-500 rounded-2xl">
              Software Engineer
            </span>
            <span className="w-full px-4 py-2 text-xs sm:text-sm lg:text-base font-semibold text-white bg-green-500 rounded-2xl">
              UI/UX Enthusiast
            </span>
          </div>
          <h1 className="my-5 text-2xl antialiased lg:text-4xl">
            <span className="font-semibold">Dadi Ilham Setiadi</span>
          </h1>
          <p className="text-base sm:leading-relaxed sm:text-xl">
            I am a technology enthusiast and currently final year Information
            System Student at UIN Syarif Hidayatullah Jakarta. Love to explore
            learning something new, traveling a new places and also like to
            reading. <br></br>
            <br></br>
            Let's get acquainted with me through{" "}
            <span className="font-semibold text-blue-700 transition duration-300 hover:underline">
              <a
                href="https://www.linkedin.com/in/idadilham/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>{" "}
            or{" "}
            <span className="font-semibold text-purple-700 transition duration-300 hover:underline">
              <a
                href="https://www.instagram.com/idadcode/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
