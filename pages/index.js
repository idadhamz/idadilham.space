import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Link from 'next/link';
import matter from 'gray-matter';

import listProjects from '../data/projects';
import listWork from '../data/work';

import Nav from '../components/nav';
import BlogList from '../components/blogList';

export default function Home(props) {

  return (
    <div>
      <Head>
        <meta charSet="UTF-8"></meta>
        <title>Idadilham</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Hello its me Dadi ilham S. I'm a technology enthusiast and currently final year Information System Student at UIN Syarif Hidayatullah Jakarta."></meta>
        <meta name="google-site-verification" content="QtPLOMbLk5ajIwIdcq0yrxGvpF5Djm9hrsVk7kMl-6g" />
      </Head>

      {/* <img src="/assets/img/circle_shapes.svg" alt="circle-intro" className="w-80 h-auto lg:w-200 absolute top-0 left-0 z-0"></img> */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:divide-x">
          <Nav />
          <div className="col-span-3">

            <div className="p-5 lg:p-12 space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="col-span-1">
                  <img src="/assets/img/fotoDadi.jfif" alt="foto-dadi-intro" className="w-60 h-auto lg:w-80 object-cover rounded-xl"></img>
                </div>
                <div className="col-span-3 lg:my-auto">
                  <div className="my-10 lg:my-auto lg:mx-20">
                    <h1 className="my-5 text-4xl lg:text-4xl antialiased">
                      <span className="font-bold text-black">Dadi Ilham Setiadi</span>
                    </h1>
                    <div className="my-6 space-x-2">
                      <span className="w-full px-4 py-2 text-base rounded-full text-indigo-500 border border-indigo-500">
                        Software Engineer
                      </span>
                      <span className="w-full px-4 py-2 text-base rounded-full text-green-500 border border-green-500">
                        UI/UX Enthusiast
                      </span>
                    </div>
                    <p className="text-md text-gray-700 leading-relaxed">Hello my name is <b>Dadi ilham
                    Setiadi</b>. I am a technology enthusiast and currently final year
                    Information System Student at UIN Syarif Hidayatullah Jakarta.
                    Love to explore learning something new, traveling a new places and
                    also like to reading. <br></br><br></br>
                    Let's get acquainted with me through <span className="font-bold transition duration-300 text-blue-700 hover:underline"><Link href="https://www.linkedin.com/in/idadilhams/"> LinkedIn</Link></span> or <span className="font-bold transition duration-300 text-purple-700 hover:underline"><Link href="https://www.instagram.com/idadcode/">Instagram</Link></span>
                    </p>
                  </div>
                </div>
              </div>

              <h1 className="my-5 text-2xl lg:text-3xl antialiased text-gray-700">
                <span className="font-bold text-green-700">Work</span> History
              </h1>
              <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap">

                  { listWork.map((data, index) => (

                      <div className="flex relative pt-5 pb-5 sm:items-center md:w-2/3" key={index}>
                        <div className="flex-shrink-0 w-12 h-12 rounded-full mt-auto sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-lg">{index+1}</div>
                        <div className="flex-grow md:pl-2 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h1 className="font-bold title-font text-black mb-1 text-xl pr-5">{data.job}</h1>
                            <p><span className="font-semibold text-green-700 hover:underline"><a href={data.url}> {data.company}</a></span> ({data.date})</p>
                          </div>
                        </div>
                      </div>
                      
                  ))}
                  
                </div>
              </section>

              <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="col-span-4">
                  <h1 className="my-5 text-2xl lg:text-3xl antialiased text-gray-700">
                      <span className="font-bold text-green-700">Latest</span> Projects
                  </h1>
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    
                    { listProjects.sort((a,b) => b.id - a.id).slice(0,2).map((data, index) => (
                    
                    <div className="col-span-1 my-5 mr-5 w-full md:w-auto" key={index}>
                      <div>
                        <div className="w-auto h-auto">
                          <img src={data.src} alt={data.altText} className="object-cover transition duration-500 ease-in-out transform hover:scale-105"></img>
                        </div>
                        <div className="px-2 py-5 flex space-x-2 justify-between">
                          <div className="flex-initial">
                            <Link href={data.url}>
                              <h1 className="font-semibold text-lg text-gray-800 text-left hover:text-green-700 hover:underline cursor-pointer">{data.caption}</h1>
                            </Link>
                            { data.stack.map((item, index) => (
                              <h1 className="font-medium text-sm text-gray-500 text-left inline mr-2" key={index}>{item}</h1>
                            ))}
                          </div>
                          <div className="flex-initial">
                            {data.type === 'Website' ? (
                            <p className="bg-green-700 text-white text-sm rounded-full px-4 py-2 w-min">{data.type}</p>
                            ) : (
                              <p className="bg-blue-700 text-white text-sm rounded-full px-4 py-2 w-min">{data.type}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    )
                    )}

                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="col-span-4">
                  <h1 className="text-2xl lg:text-3xl antialiased text-gray-700">
                      <span className="font-bold text-green-700">Latest</span> Blog
                  </h1>
                    
                  <BlogList allBlogs={props.allBlogs.slice(0, 2)} />

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export async function getStaticProps() {
  //get blogs & context from folder
  const blogs = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../content/blogs', true, /\.md$/))

  return {
    props: {
      allBlogs: blogs,
    },
  }
}