import Head from 'next/head'
import Nav from '../components/nav';

import Link from 'next/link';

export default function Layout(props) {
  return (
    <div>

      <Head>
        <meta charset="UTF-8"></meta>
        <title>{props.titleBlog} | Idadilham</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={props.titleBlog}></meta>
        <meta name="google-site-verification" content="QtPLOMbLk5ajIwIdcq0yrxGvpF5Djm9hrsVk7kMl-6g" />
      </Head>

      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-4 lg:divide-x">
          <Nav />
          <div class="col-span-3">
            <div class="p-5 lg:p-12">
              <Link href="/blog">
                <h1 class="text-xl lg:text-xl antialiased text-gray-700 mb-10 hover:underline cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-7 w-7 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d='M7 16l-4-4m0 0l4-4m-4 4h18' />
                  </svg>
                  <span class="font-normal text-gray-700 px-2">Back to blog list</span>
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