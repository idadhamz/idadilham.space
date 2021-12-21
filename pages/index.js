import matter from "gray-matter";
import MetaHead from "@/components/head";
import Nav from "@/components/Nav";
import BlogList from "@/components/blogList";
import Hero from "@/components/Hero";
import WorkHistory from "@/components/WorkHistory";
import LatestProject from "@/components/LatestProject";

export default function Home(props) {
  const data = {
    title: "Idadilham",
    description:
      "Hello its me Dadi ilham S. I'm a technology enthusiast and currently final year Information System Student at UIN Syarif Hidayatullah Jakarta.",
    url: "https://idadilham.site/",
  };

  return (
    <div>
      <MetaHead data={data} />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:divide-x">
          <Nav />
          <div className="col-span-3">
            <div className="p-5 space-y-10 lg:p-12">
              <Hero />
              <WorkHistory />
              <LatestProject />
              <div className="grid grid-cols-1 lg:grid-cols-4">
                <h1 className="text-2xl antialiased text-gray-700 lg:text-3xl">
                  <span className="font-bold text-green-700">Latest</span> Blog
                </h1>
                <div className="col-span-4">
                  <BlogList allBlogs={props.allBlogs.slice(0, 2)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  //get blogs & context from folder
  const blogs = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../content/blogs", true, /\.md$/));

  return {
    props: {
      allBlogs: blogs,
    },
  };
}
