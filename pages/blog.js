import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Nav from '../components/nav';

export default function Blog() {

  return (
    <div>

      <Head>
        <title>Blog | Idadcode</title>
      </Head>
      
      <div class="container mx-auto px-10">
        <div class="grid grid-cols-1 lg:grid-cols-4">
          <Nav />
          <div class="col-span-3 my-10">
            <h1 class="m-5 mb-10 text-2xl lg:text-3xl antialiased tracking-wide text-gray-700">
              <span class="font-bold text-gray-700 bg-green-100 p-1">Blog</span>
            </h1>
            <h2 class="m-5 mb-10 text-xl lg:text-xl antialiased tracking-wide text-gray-700">
              <span class="font-bold text-gray-700">This section is still under construction ✌🏻</span>
            </h2>
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
