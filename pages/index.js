import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Link from 'next/link';

import listPortofolio from '../data/portofolio';
import Nav from '../components/nav';

export default function Home() {

  return (
    <div>
      <Head>
        <meta charset="UTF-8"></meta>
        <title>Idadcode</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Welcome to Dadi Ilham S's portfolio website, I hope we can work together and achieve the expected goals."></meta>
      </Head>

      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-4 divide-y-2 lg:divide-x">
          <Nav />
          <div class="col-span-3">

            <div class="p-10 space-y-10">
              <div class="grid grid-cols-1 lg:grid-cols-4">
                <div class="col-span-1">
                  <img src="/assets/img/fotoDadi.jpeg" alt="foto-dadi-intro" class="w-60 h-auto lg:w-80 object-cover rounded-xl"></img>
                </div>
                <div class="col-span-3 lg:my-auto">
                  <div class="my-10 lg:my-auto lg:mx-20">
                    <h1 class="my-5 text-4xl lg:text-4xl antialiased">
                      <span class="font-bold text-gray-700">Dadi Ilham Setiadi</span>
                    </h1>
                    <div class="my-6">
                      <h3 class="text-md lg:text-lg antialiased inline">
                        <span class="font-bold text-green-700 bg-green-100 rounded-md py-2 px-4">Software Engineer</span>
                      </h3>
                      <h3 class="text-md lg:text-lg antialiased inline my-6 mx-4">
                        <span class="font-bold text-blue-700 bg-blue-100 rounded-md py-2 px-4">UI/UX Enthusiast</span>
                      </h3>
                    </div>
                    <p class="text-md text-gray-700 leading-relaxed">Hello my name is <b>Dadi ilham
                    Setiadi</b>. I am a technology enthusiast and currently final year
                    Information System Student at UIN Syarif Hidayatullah Jakarta.
                    Love to explore learning something new, traveling a new places and
                    also like to reading. <br></br><br></br>
                    Let's get acquainted with me through <span class="font-bold text-blue-700 hover:underline"><Link href="https://www.linkedin.com/in/idadilhams/">LinkedIn</Link></span> or <span class="font-bold text-purple-600 hover:underline"><Link href="https://www.instagram.com/idadcode/">Instagram</Link></span>
                    </p>
                    {/* <p class="text-lg text-grey-700">Hi, Perkenalkan saya <span class="font-bold text-green-700">Dadi Ilham Setiadi</span> <br></br> Mahasiswa IT (Sistem Informasi) <br></br> 
                      Universitas Islam Negeri Syarif Hidayatullah Jakarta <br></br> <br></br> 
                      Yuk Berkenalan dengan saya melalui <span class="font-bold text-blue-700 hover:underline"><Link href="https://www.linkedin.com/in/idadilhams/">LinkedIn</Link></span> atau <span class="font-bold text-purple-600 hover:underline"><Link href="https://www.instagram.com/idadcode/">Instagram</Link></span>
                    </p> */}
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-4">
                <div class="col-span-4">
                  <h1 class="my-5 text-2xl lg:text-3xl antialiased tracking-wide text-gray-700">
                      <span class="font-bold text-green-700">Latest</span> Portofolio
                  </h1>
                  <div class="grid grid-cols-1 lg:grid-cols-3">
                    
                    { listPortofolio.slice(0,3).map((data) => (
                    
                    <div class="col-span-1 bg-gray-200 rounded-md my-5 mr-5">
                      <div class="px-5 py-10">
                        <img src={data.src} alt={data.altText} class="object-cover rounded-md"></img>
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

              {/* <h1 class="my-5 text-2xl lg:text-3xl antialiased tracking-wide text-gray-700">
                <span class="font-bold text-green-700">Keep In Touch</span>
              </h1> */}

              {/* <div class="grid grid-cols-1"> */}
                    
                {/* { listProject.slice(0,3).map((data) => ( */}
                    
                    {/* <div class="col-span-auto bg-gray-200 rounded-md my-5 mr-5">
                      <div class="grid grid-cols-3">

                        <div class="col-span-auto p-10">
                          <h1 class="text-center text-lg text-gray-700 font-bold hover:text-green-700 cursor-pointer">
                            dadiilhamsetiadii@gmail.com
                          </h1>
                        </div>
                        <div class="col-span-auto p-10">
                          <h1 class="text-center text-lg text-gray-700 font-bold hover:text-green-700 cursor-pointer">
                            LinkedIn
                          </h1>
                        </div>
                        <div class="col-span-auto p-10">
                          <h1 class="text-center text-lg text-gray-700 font-bold hover:text-green-700 cursor-pointer">
                            Dribbble
                          </h1>
                        </div>
                        <div class="col-span-auto p-10">
                          <h1 class="text-center text-lg text-gray-700 font-bold hover:text-green-700 cursor-pointer">
                            Github
                          </h1>
                        </div>
                        <div class="col-span-auto p-10">
                          <h1 class="text-center text-lg text-gray-700 font-bold hover:text-green-700 cursor-pointer">
                            Instagram
                          </h1>
                        </div>

                      </div>

                    </div> */}

                {/* ))} */}

              {/* </div> */}

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
