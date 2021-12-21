import listProjects from "@/data/projects";

import MetaHead from "@/components/head";
import Nav from "@/components/Nav";
import ProjectItem from "@/components/ProjectItem";

export default function Projects() {
  const data = {
    title: "Projects | Idadilham",
    description:
      "Projects Portfolio of Dadi Ilham S, was create website and UI exploration.",
    url: "https://idadilham.site/projects",
  };

  return (
    <div>
      <MetaHead data={data} />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:divide-x">
          <Nav />
          <div className="col-span-3">
            <div className="p-5 lg:p-12">
              <h1 className="mb-3 text-3xl antialiased lg:text-3xl">
                <span className="font-bold text-green-700">All</span> Projects
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {listProjects
                  .sort((a, b) => b.id - a.id)
                  .map((data, index) => (
                    <ProjectItem data={data} key={index} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
