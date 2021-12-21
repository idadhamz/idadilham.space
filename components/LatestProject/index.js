import ProjectItem from "@/components/ProjectItem";
import listProjects from "@/data/projects";

export default function LatestProject() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <div className="col-span-4">
        <h1 className="my-5 text-2xl antialiased text-gray-700 lg:text-3xl">
          <span className="font-bold text-green-700">Latest</span> Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {listProjects
            .sort((a, b) => b.id - a.id)
            .slice(0, 2)
            .map((data, index) => (
              <ProjectItem data={data} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
