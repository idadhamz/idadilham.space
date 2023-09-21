import Link from "next/link";

import reformatDate from "helpers/reformatDate";

export default function BlogList({ allBlogs }) {
  const image_src = "/assets/uploads";

  return <>
    {allBlogs.map((blog) => (
      <div className="w-full col-span-1 md:w-auto" key={blog.slug}>
        <div className="p-4 sm:p-8 transition duration-500 bg-gray-200 dark:bg-gray-600 hover:border-2 cursor-pointer lg:w-full rounded-xl hover:border-green-500">
          <Link key={blog.slug} href={{ pathname: `/blog/${blog.slug}` }} legacyBehavior>
            <div className="flex flex-col space-y-8">
              <img
                src={image_src + blog.frontmatter.image}
                alt={blog.frontmatter.image}
                className="object-cover w-full sm:h-96"
              />
              <div className="flex flex-col">
                <p className="text-xs sm:text-base font-normal text-gray-400 hover:text-white cursor-default">
                  {reformatDate(blog.frontmatter.date)}
                </p>
                <p className="text-base sm:text-xl font-semibold truncate">
                  {blog.frontmatter.title}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    ))}
  </>;
}
