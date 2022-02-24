import Link from "next/link";

import reformatDate from "helpers/reformatDate";

export default function BlogList({ allBlogs }) {
  const image_src = "/assets/uploads";

  return (
    <>
      {allBlogs.map((blog, index) => (
        <div className="w-full col-span-1 mb-5 mr-5 md:w-auto" key={index}>
          <div className="p-4 sm:p-8 transition duration-500 bg-gray-200 dark:bg-gray-600 hover:border-2 cursor-pointer lg:w-full rounded-xl hover:border-green-500">
            <Link key={blog.slug} href={{ pathname: `/blog/${blog.slug}` }}>
              <div className="flex flex-col">
                <img
                  src={image_src + blog.frontmatter.image}
                  alt={blog.frontmatter.image}
                  className="object-cover w-full pb-5 sm:max-h-96"
                />
                <div className="flex flex-col gap-1 sm:gap-2 text-center">
                  <p className="text-base sm:text-lg font-normal">
                    {reformatDate(blog.frontmatter.date)}
                  </p>
                  <p className="text-lg sm:text-2xl font-semibold truncate">
                    {blog.frontmatter.title}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
