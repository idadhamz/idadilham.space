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
        <div className="my-10 lg:my-auto lg:mx-20">
          <div className="my-6 space-x-2">
            <span className="w-full px-4 py-2 text-base text-indigo-500 border border-indigo-500 rounded-full">
              Software Engineer
            </span>
            <span className="w-full px-4 py-2 text-base text-green-500 border border-green-500 rounded-full">
              UI/UX Enthusiast
            </span>
          </div>
          <h1 className="my-5 text-4xl antialiased lg:text-4xl">
            <span className="font-bold">Dadi Ilham Setiadi</span>
          </h1>
          <p className="leading-relaxed text-xl">
            I am a technology enthusiast and currently final year Information
            System Student at UIN Syarif Hidayatullah Jakarta. Love to explore
            learning something new, traveling a new places and also like to
            reading. <br></br>
            <br></br>
            Let's get acquainted with me through{" "}
            <span className="font-bold text-blue-700 transition duration-300 hover:underline">
              <a
                href="https://www.linkedin.com/in/idadilham/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>{" "}
            or{" "}
            <span className="font-bold text-purple-700 transition duration-300 hover:underline">
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
