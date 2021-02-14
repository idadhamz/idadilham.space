import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Link from 'next/link';
import Nav from '../components/nav';
import listProjects from '../data/projects';

export default function Projects() {

  return (
    <div>

      <Head>
        <meta charset="UTF-8"></meta>
        <title>Projects | Idadilham</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Projects Portfolio of Dadi Ilham S, was create website and UI exploration."></meta>
        <meta name="google-site-verification" content="QtPLOMbLk5ajIwIdcq0yrxGvpF5Djm9hrsVk7kMl-6g" />
      </Head>
      
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-4 lg:divide-x">
          <Nav />
          <div class="col-span-3">
            <div class="p-5 lg:p-12">
              <h1 class="text-3xl lg:text-3xl antialiased mb-3">
                <span class="font-bold text-green-700">All</span> Projects
              </h1>
              <div class="grid grid-cols-1 lg:grid-cols-2">
                  { listProjects.map((data, index) => (
                    
                    <div class="col-span-1 my-5 mr-5 w-full md:w-auto" key={index}>
                      <div>
                        <img src={data.src} alt={data.altText} class="object-cover w-full max-h-72 transition duration-500 ease-in-out transform hover:scale-105"></img>
                        <div class="px-2 py-5 flex space-x-2 justify-between">
                          <div class="flex-initial">
                            <Link href={data.url}>
                              <h1 class="font-semibold text-lg text-gray-800 text-left hover:text-green-700 hover:underline cursor-pointer">{data.caption}</h1>
                            </Link>
                            { data.stack.map((item) => (
                              <h1 class="font-medium text-sm text-gray-500 text-left inline mr-2">{item}</h1>
                            ))}
                          </div>
                          <div class="flex-initial">
                            {data.type === 'Website' ? (
                            <p class="bg-green-700 text-white text-sm rounded-full px-4 py-2 w-min">{data.type}</p>
                            ) : (
                              <p class="bg-blue-700 text-white text-sm rounded-full px-4 py-2 w-min">{data.type}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
