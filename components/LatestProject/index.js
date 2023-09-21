import ProjectItem from "@/components/ProjectItem";
import listProjects from "@/data/projects";
import SeeAll from "@/components/Molecules/SeeAll";

export default function LatestProject() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <div className="col-span-4">
        <div className="flex items-center justify-between">
          <h1 className="my-5 text-xl sm:text-2xl antialiased">
            <span className="font-semibold text-green-700 dark:text-green-400">
              Latest Portofolio
            </span>
          </h1>
          <SeeAll
            href="portofolio"
            text="See All Portofolio"
            d_icon="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {listProjects
            .sort((a, b) => b.id - a.id)
            .slice(0, 2)
            .map((data) => (
              <ProjectItem data={data} key={data?.id} />
            ))}
        </div>
      </div>
    </div>
  );
}
