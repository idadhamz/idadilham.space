import * as React from "react";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
const glob = require("glob");

import Layout from "@/components/layout";
import reformatDate from "helpers/reformatDate";

export default function BlogTemplate({ frontmatter, markdownBody, titleBlog }) {
  const image_src = "/assets/uploads";

  if (!frontmatter) return <></>;

  return (
    <Layout titleBlog={titleBlog}>
      <div className="col-span-1 p-2 my-5">
        <div>
          <div>
            <h1 className="text-4xl font-bold text-left text-black cursor-pointer">
              {frontmatter.title}
            </h1>
            <h2 className="py-5 text-lg font-normal text-left text-black">
              Date{" "}
              <span className="pl-10 font-bold">
                {reformatDate(frontmatter.date)}
              </span>
            </h2>
            <img
              src={image_src + frontmatter.image}
              alt={frontmatter.image}
              className="py-5 lg:w-4/5"
            />
            <p className="my-5 text-lg font-normal text-left text-black">
              <Markdown>{markdownBody}</Markdown>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../content/blogs/${slug}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
      titleBlog: data.data.title,
    },
  };
}

export async function getStaticPaths() {
  const blogs = glob.sync("content/blogs/**/*.md");
  console.log(blogs);

  const blogSlugs = blogs.map((file) =>
    file.split("/")[2].replace(/ /g, "-").slice(0, -3).trim()
  );

  const paths = blogSlugs.map((slug) => `/blog/${slug}`);
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
