
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
  
      const date_indo = bulan + " " + tanggal + ", " + tahun;
      
      return date_indo
      
    }

    const image_src = "/assets/uploads";

    return(
        <div>
            <div class="grid grid-cols-2 my-10">
                  { allBlogs.map((blog) => (
                    
                    <div class="col-span-2 lg:col-span-1 mr-5 mb-5">
                      <div class="bg-white border border-gray-300 p-5 rounded lg:w-full">
                        <div>
                          <img src={image_src + blog.frontmatter.image} alt={blog.frontmatter.image}
                              class="bg-cover bg-center bg-gray-300 h-80 rounded object-cover transition duration-500 ease-in-out transform hover:scale-105">
                          </img>
                        </div>
                        <div class="my-6">
                          <p class="text-md font-normal tracking-wide text-black-600 my-1">{reformatDate(blog.frontmatter.date)}</p>
                          <Link key={blog.slug} href={{ pathname: `/blog/${blog.slug}` }}>
                            <p class="text-xl font-bold tracking-wide text-black-600 cursor-pointer hover:text-green-700">
                              {blog.frontmatter.title}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>

                  ))}
              </div>
        </div>
    )
}