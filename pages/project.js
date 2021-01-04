import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Link from 'next/link';
import Nav from '../components/nav';
import listProject from '../data/project';

export default function Project() {

  return (
    <div>

      <Head>
        <title>Project | Idadcode</title>
      </Head>
      
      <div class="container mx-auto px-10">
        <div class="grid grid-cols-1 lg:grid-cols-4">
          <Nav />
          <div class="col-span-3 my-5">
            <h1 class="m-5 mb-10 text-2xl lg:text-3xl antialiased tracking-wide text-gray-700">
              <span class="font-bold text-gray-700 bg-green-100 p-1">All Project</span>
            </h1>
            <div class="grid grid-cols-1 lg:grid-cols-2">
                { listProject.map((data) => (
                  
                  <div class="col-span-1 bg-gray-200 rounded-md mx-5 mb-10">
                    <div class="px-5 py-10">
                      <img src={data.src} class="object-cover rounded-md"></img>
                      <Link href={data.url}>
                        <h1 class="m-5 font-bold text-md text-gray-800 text-left hover:text-green-700 hover:underline cursor-pointer">{data.caption}</h1>
                      </Link>
                      {data.type === 'Website' ? (
                        <p class="bg-green-700 text-white text-sm rounded-full mx-5 px-5 py-2 w-min">{data.type}</p>
                      ) : (
                        <p class="bg-blue-700 text-white text-sm rounded-full mx-5 px-5 py-2 w-min">{data.type}</p>
                      )}
                    </div>
                  </div>

                ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
