import matter from "gray-matter";
import BlogList from "@/components/blogList";
import Hero from "@/components/Hero";
import WorkHistory from "@/components/WorkHistory";
import LatestProject from "@/components/LatestProject";
import SeeAll from "@/components/Molecules/SeeAll";
import Layout from "@/components/layout";

export default function Home(props) {
  const data = {
    title: "Idadilham",
    description:
      "Hello its me Dadi ilham S. I'm a technology enthusiast and currently final year Information System Student at UIN Syarif Hidayatullah Jakarta.",
    url: "https://idadilham.space/",
  };

  return (
    <Layout data={data}>
      <div className="p-5 space-y-10 lg:p-12">
        <Hero />
        <hr />
        <WorkHistory />
        <hr />
        <LatestProject />
        <hr />
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="col-span-4">
            <div className="flex items-center justify-between">
              <h1 className="my-5 text-2xl antialiased sm:text-4xl">
                <span className="font-semibold text-green-700 dark:text-green-400">
                  Latest
                </span>{" "}
                Blogs
              </h1>
              <SeeAll
                href="blog"
                text="See All Blogs"
                d_icon="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </div>
            <div className="col-span-4">
              <div className="grid grid-cols-1 my-10 md:grid-cols-2">
                <BlogList allBlogs={props.allBlogs.slice(0, 2)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
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
