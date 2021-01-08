import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Link from 'next/link';
import Nav from '../components/nav';
import listPortofolio from '../data/portofolio';

export default function Portofolio() {

  return (
    <div>

      <Head>
        <meta charset="UTF-8"></meta>
        <title>Portfolio | Idadcode</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Portfolio of @idadcode, was create website and UI exploration."></meta>
        <meta name="google-site-verification" content="0xwjgRwg4ZHIOlN8RtuhBwmAyLuEZvWfAHqSeGZZGjY" />
      </Head>
      
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-4 lg:divide-x">
          <Nav />
          <div class="col-span-3">
            <div class="p-10">
              <p class="mb-10">
                <h1 class="text-3xl lg:text-2xl antialiased text-gray-700 hover:underline cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-10 w-10 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="font-bold text-gray-700 px-2">Portofolio</span>
                </h1>
                <h2 class="text-lg lg:text-xl antialiased text-gray-700 my-2">
                  <span class="text-gray-700 px-2">"The best work is created through sincerity in trying"</span>
                </h2>
              </p>
              <div class="grid grid-cols-1 lg:grid-cols-2">
                  { listPortofolio.map((data) => (
                    
                    <div class="col-span-1 my-5 mr-5">
                      <div>
                        <img src={data.src} alt={data.altText} class="object-cover rounded-md border border-gray-200 max-h-80"></img>
                        <div class="my-4">
                          <Link href={data.url}>
                            <h1 class="font-semibold text-lg text-gray-800 text-left hover:text-green-700 hover:underline cursor-pointer">{data.caption}</h1>
                          </Link>
                          {/* <div class="my-1"> */}
                            { data.stack.map((item) => (
                              <h1 class="mr-2 font-medium text-sm text-gray-500 text-left inline">{item}</h1>
                            ))}
                          {/* </div> */}
                        </div>
                        {data.type === 'Website' ? (
                          <p class="bg-green-700 text-white text-sm rounded-full px-4 py-2 w-min">{data.type}</p>
                        ) : (
                          <p class="bg-blue-700 text-white text-sm rounded-full px-4 py-2 w-min">{data.type}</p>
                        )}
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
