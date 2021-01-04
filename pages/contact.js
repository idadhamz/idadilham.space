import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Nav from '../components/nav';

export default function Contact() {

  return (
    <div>

      <Head>
        <title>Contact | Idadcode</title>
      </Head>
      
      <div class="container mx-auto px-10">
        <div class="grid grid-cols-1 lg:grid-cols-4">
          <Nav />
          <div class="col-span-3 my-5">
            <h1 class="m-5 mb-10 text-2xl lg:text-3xl antialiased tracking-wide text-gray-700">
              <span class="font-bold text-gray-700 bg-green-100 p-1">Contact</span>
            </h1>
            <h2 class="m-5 mb-10 text-xl lg:text-xl antialiased tracking-wide text-gray-700">
              <span class="font-bold text-gray-700">This section is still under construction ✌🏻</span>
            </h2>
          </div>
        </div>
      </div>

    </div>
  )
}
