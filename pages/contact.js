import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Nav from '../components/nav';

export default function Contact() {

  return (
    <div>

      <Head>
        <meta charset="UTF-8"></meta>
        <title>Contact | Idadilham</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Contact of Idadilham.site, Say Hello! If you want to talk to me about something that could interest me, you can send me message to @idadcode instagram."></meta>
        <meta name="google-site-verification" content="QtPLOMbLk5ajIwIdcq0yrxGvpF5Djm9hrsVk7kMl-6g" />
      </Head>
      
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-4 lg:divide-x">
          <Nav />
          <div class="col-span-3">
            <div class="p-5 lg:p-12">
              <h1 class="text-3xl lg:text-3xl antialiased mb-10">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-10 w-10 inline">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg> */}
                <span class="font-bold text-green-700">Contact</span> Me
              </h1>
              <h2 class="text-xl lg:text-xl antialiased tracking-wide text-gray-700">
                <span class="font-normal text-black">This section is still under construction ✌🏻</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
