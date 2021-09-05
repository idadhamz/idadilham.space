import listProjects from '../data/projects';

import MetaHead from '../components/meta-head/index';
import Nav from '../components/nav';
import ProjectItem from '../components/project-item/index';

export default function Projects() {

  const data = {
    title: 'Projects | Idadilham',
    description: 'Projects Portfolio of Dadi Ilham S, was create website and UI exploration.'
  };

  return (
    <div>

      <MetaHead data={data} />

      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-4 lg:divide-x">
          <Nav />
          <div class="col-span-3">
            <div class="p-5 lg:p-12">
              <h1 class="text-3xl lg:text-3xl antialiased mb-3">
                <span class="font-bold text-green-700">All</span> Projects
              </h1>
              <div class="grid grid-cols-1 lg:grid-cols-2">
                {listProjects.sort((a, b) => b.id - a.id).map((data, index) => (
                  <ProjectItem data={data} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
