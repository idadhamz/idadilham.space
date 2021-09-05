import matter from 'gray-matter';

import listProjects from '../data/projects';

import MetaHead from '../components/head';
import Nav from '../components/nav';
import BlogList from '../components/blogList';
import HeroSection from '../components/hero-section/index';
import WorkHistorySection from '../components/work-history-section/index';
import ProjectItem from '../components/project-item/index';

export default function Home(props) {

  const data = {
    title: 'Idadilham',
    description: 'Hello its me Dadi ilham S. I\'m a technology enthusiast and currently final year Information System Student at UIN Syarif Hidayatullah Jakarta.'
  };

  return (
    <div>

      <MetaHead data={data} />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:divide-x">
          <Nav />
          <div className="col-span-3">

            <div className="p-5 lg:p-12 space-y-10">
              <HeroSection />

              <h1 className="my-5 text-2xl lg:text-3xl antialiased text-gray-700">
                <span className="font-bold text-green-700">Work</span> History
              </h1>

              <WorkHistorySection />

              <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="col-span-4">
                  <h1 className="my-5 text-2xl lg:text-3xl antialiased text-gray-700">
                    <span className="font-bold text-green-700">Latest</span> Projects
                  </h1>
                  <div className="grid grid-cols-1 lg:grid-cols-2">

                    {listProjects.sort((a, b) => b.id - a.id).slice(0, 2).map((data, index) =>
                      <ProjectItem data={data} key={index} />
                    )}

                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="col-span-4">
                  <h1 className="text-2xl lg:text-3xl antialiased text-gray-700">
                    <span className="font-bold text-green-700">Latest</span> Blog
                  </h1>

                  <BlogList allBlogs={props.allBlogs.slice(0, 2)} />

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export async function getStaticProps() {
  //get blogs & context from folder
  const blogs = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../content/blogs', true, /\.md$/))

  return {
    props: {
      allBlogs: blogs,
    },
  }
}