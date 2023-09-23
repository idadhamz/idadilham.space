import { useState, useEffect } from "react";
import listProjects from "@/data/projects";

import Layout from "@/components/layout";
import ProjectItem from "@/components/ProjectItem";
import TabProjects from "@/components/Molecules/TabProjects";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

export default function Portofolio() {
  const data = {
    title: "Portofolio | Idadilham.space",
    description:
      "Portfolio of Dadi Ilham S, was create website and UI exploration.",
    url: "https://idadilham.space/portofolio",
  };

  const tabList = ["All", "Website", "UI/UX"];

  const [active, setActive] = useState(tabList[0]);
  const [filterProjects, setFilterProjects] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (listProjects) {
      setFilterProjects(listProjects);
    }
  }, [listProjects]);

  const handleSelectedTab = (tab) => {
    setActive(tab);
    if (tab === "All") {
      setFilterProjects(listProjects);
    } else {
      setFilterProjects(listProjects.filter((data) => data.type === tab));
    }
  };

  if (!mounted) return <></>;

  return (
    <Layout data={data} suppressHydrationWarning>
      <div className="p-5 lg:p-12 space-y-12">
        {/* <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faLaptopCode}
            className="text-green-700 dark:text-green-400"
            style={{
              fontSize: 30,
            }}
          />
          <h1 className="text-2xl sm:text-4xl antialiased font-semibold text-green-700 dark:text-green-400">
            Portofolio
          </h1>
        </div> */}
        <div className="space-y-8">
          <TabProjects
            tabList={tabList}
            handleSelectedTab={handleSelectedTab}
            active={active}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filterProjects
              .sort((a, b) => b.id - a.id)
              .map((data) => (
                <ProjectItem data={data} key={data} />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
