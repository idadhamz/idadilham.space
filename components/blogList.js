
import Link from 'next/link';
import ReactMarkdown from 'react-markdown'

export default function BlogList({allBlogs}){

    function truncateSummary(content) {
      return content.slice(0, 200).trimEnd()
    }
  
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

    return(
        <div>
            <div class="grid grid-cols-1">
                  { allBlogs.map((blog) => (
                    
                    <div class="col-span-1 m-1 text-black border-b border-gray-300">
                      <div>
                        <div class="py-5">
                          <Link key={blog.slug} href={{ pathname: `/blog/${blog.slug}` }}>
                            <h1 class="font-bold text-2xl text-left inline cursor-pointer hover:underline ">
                              {blog.frontmatter.title}
                            </h1>
                          </Link>
                          <Link key={blog.slug} href={{ pathname: `/blog/${blog.slug}` }}>
                            <div class="float-right text-lg inline cursor-pointer hover:underline">
                              See details
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="mx-2 h-7 w-7 inline">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                          </Link>
                          
                          {/* <h2 class="font-bold text-sm text-gray-800 text-left">{reformatDate(blog.frontmatter.date)}</h2> */}
                          {/* <p class="my-5">
                            <ReactMarkdown
                              source={truncateSummary(blog.markdownBody)}
                            />
                          </p> */}
                        </div>
                      </div>
                    </div>

                  ))}
              </div>
        </div>
    )
}