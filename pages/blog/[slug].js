import * as React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Markdown from 'markdown-to-jsx'
const glob = require('glob')

import Layout from '../../components/layout'

export default function BlogTemplate({ frontmatter, markdownBody, titleBlog }) {

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    
    let tahun = date.getFullYear();
    let bulan = date.getMonth();
    let tanggal = date.getDate();

    switch(bulan) {
      case 0: bulan = "Jan"; break;
      case 1: bulan = "Feb"; break;
      case 2: bulan = "Mar"; break;
      case 3: bulan = "Apr"; break;
      case 4: bulan = "Mei"; break;
      case 5: bulan = "Jun"; break;
      case 6: bulan = "Jul"; break;
      case 7: bulan = "Agt"; break;
      case 8: bulan = "Sept"; break;
      case 9: bulan = "Okt"; break;
      case 10: bulan = "Nov"; break;
      case 11: bulan = "Des"; break;
    }

    const date_indo = tanggal + " " + bulan + " " + tahun;
    
    return date_indo
    
  }

  const image_src = "/assets/uploads";

  if (!frontmatter) return <></>

  return (
    <Layout titleBlog={titleBlog}>
        <div class="col-span-1 my-5 p-2">
            <div>
                <div>
                    <h1 class="font-bold text-4xl text-black text-left cursor-pointer">{frontmatter.title}</h1>
                    <h2 class="font-normal text-lg text-black text-left py-5">Date <span class="font-bold pl-10">{reformatDate(frontmatter.date)}</span></h2>
                    <img src={image_src + frontmatter.image} alt={frontmatter.image} class="py-5 lg:w-4/5"></img>
                    <p class="font-normal text-lg text-black text-left my-5">
                        {/* <ReactMarkdown
                            source={markdownBody}
                        /> */}
                        {/* <Markdown 
                          children={markdownBody}
                        /> */}
                        <Markdown>{markdownBody}</Markdown>
                    </p>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params
  const content = await import(`../../content/blogs/${slug}.md`)
  const data = matter(content.default)

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
      titleBlog: data.data.title
    },
  }
}

export async function getStaticPaths() {
  const blogs = glob.sync('content/blogs/**/*.md')
  console.log(blogs);

  const blogSlugs = blogs.map(file =>
    file
      .split('/')[2]
      .replace(/ /g, '-')
      .slice(0, -3)
      .trim()
  )
  
  const paths = blogSlugs.map(slug => `/blog/${slug}`)
  console.log(paths);
  return {
    paths,
    fallback: false,
  }
}
