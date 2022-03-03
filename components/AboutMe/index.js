import React from "react";

import urlExternal from "helpers/urlExternal";

const AboutMe = () => {
  return (
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
          Now i'm living in <b>DKI Jakarta, Indonesia</b>. I have a passion in
          software engineering especially in website developers, and know i'm
          studying frontend things from HTML, CSS, Javascript and their
          framework CSS or Javascript. Currently i'm doing remote web dev work
          for{" "}
          {urlExternal(
            "DDB (Direktorat Digital Business)",
            "https://internship.ddbtelkom.id/"
          )}{" "}
          Telkom Indonesia for 6 months and studying with final student status
          in{" "}
          {urlExternal(
            "UIN Syarif Hidayatullah Jakarta",
            "https://www.uinjkt.ac.id/"
          )}
          .
        </h2>
        <h2 className="text-base antialiased tracking-wide sm:text-lg">
          In daily activities I have enjoyed to exploring tech related stuff,
          and reading a current technological developments. Outside of related
          software engineering, I like to watching movies/TV Series or Korean
          Drama and traveling to many places from recomendation in Social Media
          for take a picture with family or friends.
        </h2>
      </div>
    </div>
  );
};

export default AboutMe;
