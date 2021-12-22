import matter from "gray-matter";
import Layout from "@/components/layout";
import BlogList from "@/components/blogList";

export default function Blog(props) {
  const data = {
    title: "Blog | Idadilham",
    description:
      "Blog of Dadi Ilham S, sharing knowledge about technology like programing code and others.",
    url: "https://idadilham.site/blog",
  };

  return (
    <Layout data={data}>
      <div className="p-5 lg:p-12">
        <h1 className="mb-3 text-3xl antialiased lg:text-3xl">
          <span className="font-bold text-green-700">Blog</span> Story
        </h1>
        <div className="grid grid-cols-1 my-10 md:grid-cols-2">
          <BlogList allBlogs={props.allBlogs} />
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
