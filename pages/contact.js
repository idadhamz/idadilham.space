import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Nav from '../components/nav';

export default function Contact() {

  return (
    <div>

      <Head>
        <title>Contact | Idadcode</title>
      </Head>
      
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-4 divide-y-2">
          <Nav />
          <div class="col-span-3">
            <div class="p-10">
              <h1 class="text-3xl lg:text-2xl antialiased text-gray-700 mb-10 hover:underline cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-10 w-10 inline">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span class="font-bold text-gray-700 px-2">Contact</span>
              </h1>
              <h2 class="text-xl lg:text-xl antialiased tracking-wide text-gray-700">
                <span class="font-bold text-gray-700">This section is still under construction ✌🏻</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
