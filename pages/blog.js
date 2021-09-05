import matter from 'gray-matter';

import MetaHead from '../components/meta-head/index';
import Nav from '../components/nav';
import BlogList from '../components/blogList';

export default function Blog(props) {

  const data = {
    title: 'Blog | Idadilham',
    description: 'Blog of Dadi Ilham S, sharing knowledge about technology like programing code and others.'
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
                <span class="font-bold text-green-700">Blog</span> Story
              </h1>
              <BlogList allBlogs={props.allBlogs} />
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
