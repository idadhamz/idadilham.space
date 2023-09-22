import React from "react";

import urlExternal from "helpers/urlExternal";

const AboutMe = () => {
  return (
    <div>
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
          framework CSS or Javascript. 🔭 Currently i'm working on{" "}
          {urlExternal(
            "PT Mandala Multifinance",
            "https://mandalafinance.com/"
          )}{" "}
          and studying with final student status in{" "}
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
