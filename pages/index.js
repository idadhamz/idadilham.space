import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Link from 'next/link';

import listPortofolio from '../data/portofolio';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default function Home() {

  return (
    <div>
      <Head>
        <meta charset="UTF-8"></meta>
        <title>Idadcode</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Dadi Ilham S - Software Engineer, This web contains portofolio, blogs and how to contact @idadcode."></meta>
        <meta name="google-site-verification" content="0xwjgRwg4ZHIOlN8RtuhBwmAyLuEZvWfAHqSeGZZGjY" />
      </Head>

      {/* <img src="/assets/img/circle_shapes.svg" alt="circle-intro" class="w-80 h-auto lg:w-200 absolute top-0 left-0 z-0"></img> */}
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-4 lg:divide-x">
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
                      <h3 class="text-sm lg:text-md antialiased inline">
                        <span class="font-bold text-green-700 bg-green-100 rounded-md py-2 px-4">Software Engineer</span>
                      </h3>
                      <h3 class="text-sm lg:text-md antialiased inline my-6 mx-4">
                        <span class="font-bold text-blue-700 bg-blue-100 rounded-md py-2 px-4">UI/UX Enthusiast</span>
                      </h3>
                    </div>
                    <p class="text-md text-gray-700 leading-relaxed">Hello my name is <b>Dadi ilham
                    Setiadi</b>. I am a technology enthusiast and currently final year
                    Information System Student at UIN Syarif Hidayatullah Jakarta.
                    Love to explore learning something new, traveling a new places and
                    also like to reading. <br></br><br></br>
                    Let's get acquainted with me through <span class="font-bold transition duration-300 text-blue-700 hover:underline"><Link href="https://www.linkedin.com/in/idadilhams/"> LinkedIn</Link></span> or <span class="font-bold transition duration-300 text-purple-700 hover:underline"><Link href="https://www.instagram.com/idadcode/">Instagram</Link></span>
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
                  <div class="grid grid-cols-1 lg:grid-cols-2">
                    
                    { listPortofolio.slice(0,2).map((data) => (
                    
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

            {/* <Footer/> */}

          </div>
        </div>
      </div>

    </div>
  )
}
