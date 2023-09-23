import { useState, useEffect } from "react";
import matter from "gray-matter";
import Layout from "@/components/layout";
import BlogList from "@/components/blogList";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBookmark } from "@fortawesome/free-solid-svg-icons";

export default function Blog(props) {
  const data = {
    title: "Blog | Idadilham.space",
    description:
      "Blog of Dadi Ilham S, sharing knowledge about technology like programing code and others.",
    url: "https://idadilham.space/blog",
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <Layout data={data} suppressHydrationWarning>
      <div className="p-5 lg:p-12">
        {/* <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faBookmark}
            className="text-green-700 dark:text-green-400"
            style={{
              fontSize: 30,
            }}
          />
          <h1 className="text-2xl sm:text-4xl antialiased font-semibold text-green-700 dark:text-green-400">
            Blog
          </h1>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
