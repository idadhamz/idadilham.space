import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Nav from '../components/nav';

export default function Blog() {

  return (
    <div>

      <Head>
        <meta charset="UTF-8"></meta>
        <title>Blog | Idadcode</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="This is a page that lists the blogs of Dadi Ilham S."></meta>
      </Head>
      
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-4 divide-y-2">
          <Nav />
          <div class="col-span-3">
            <div class="p-10">
              <h1 class="text-3xl lg:text-2xl antialiased text-gray-700 mb-10 hover:underline cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-10 w-10 inline">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span class="font-bold text-gray-700 px-2">Blog</span>
              </h1>
              <h2 class="text-xl lg:text-xl antialiased tracking-wide text-gray-700">
                <span class="font-bold text-gray-700">This section is still under construction ✌🏻</span>
              </h2>
            </div>
          </div>
          {/* <div class="col-span-3">

            <div class="p-10">
              <div class="flex">
                <div class="flex-auto">
                  <img src="/assets/img/fotoDadi.jpeg" class="lg:w-60 object-cover"></img>
                </div>
                <div class="flex-auto">
                  <h1 class="my-5 font-bold text-3xl">Junior Developer & Mahasiswa <br></br> Sistem Informasi</h1>
                  <p class="text-lg text-grey-700">Hi, Perkenalkan saya Dadi Ilham Setiadi <br></br> Mahasiswa IT (Sistem Informasi) <br></br> Universitas Islam Negeri Syarif Hidayatullah Jakarta. <br></br> <br></br> Yuk Berkenalan dengan saya melalui linkedIn atau Instagram.</p>
                </div>
              </div>
            </div>

          </div> */}
        </div>
      </div>

    </div>
  )
}
