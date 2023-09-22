import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import AboutMe from "@/components/AboutMe";
import ConnectMe from "@/components/ConnectMe";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const data = {
    title: "About | Idadilham.space",
    description:
      "About of Dadi Ilham S, Say Hello! If you want to talk to me about something that could interest me, you can send me message to @idadcode instagram.",
    url: "https://idadilham.space/about",
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <Layout data={data} suppressHydrationWarning>
      <div className="p-5 space-y-10 lg:p-12">
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faUser}
            className="text-green-700 dark:text-green-400"
            style={{
              fontSize: 30,
            }}
          />
          <h1 className="text-2xl sm:text-4xl antialiased font-semibold text-green-700 dark:text-green-400">
            About
          </h1>
        </div>
        <AboutMe />
        <ConnectMe />
      </div>
    </Layout>
  );
}
