import Head from "next/head";
import Nav from "@/components/Nav";

import Link from "next/link";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8"></meta>
        <title>{props.titleBlog} | Idadilham</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={props.titleBlog}></meta>
        <meta
          name="google-site-verification"
          content="QtPLOMbLk5ajIwIdcq0yrxGvpF5Djm9hrsVk7kMl-6g"
        />
      </Head>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:divide-x">
          <Nav />
          <div className="col-span-3">
            <div className="p-5 lg:p-12">
              <Link href="/blog">
                <h1 className="mb-10 text-xl antialiased text-gray-700 cursor-pointer lg:text-xl hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="inline h-7 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                  <span className="px-2 font-normal text-gray-700">
                    Back to blog list
                  </span>
                </h1>
              </Link>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
