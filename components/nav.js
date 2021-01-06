
import Link from 'next/link';
import { useRouter } from "next/router";

export default function Nav(){

    const router = useRouter();

    const listNavs = [
      { text:'Home', href:'/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
      { text:'Portofolio', href:'/portofolio', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
      { text:'Blog', href:'/blog', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
      { text:'Contact', href:'/contact', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
    ];

    return(
        <div>
            <ul class="p-10 lg:fixed">
              <Link href="/">
                <img src="https://instagram.fcgk9-2.fna.fbcdn.net/v/t51.2885-19/s320x320/127091039_377152586727817_703580884705788533_n.jpg?_nc_ht=instagram.fcgk9-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=lq-a4PO0nqEAX_XFMii&tp=1&oh=2a3578eb305955027835205b9fb46b65&oe=601CFBAE" class="w-20 h-auto my-4 lg:w-20 lg:h-auto lg:m-4 object-cover rounded-full border-2 border-gray-300 hover:border-green-700 cursor-pointer"></img>
              </Link>
              {listNavs.map((data) => (
                <li class={router.pathname == data.href ? "rounded-xl text-green-700" : ""}>
                  <Link href={data.href}>
                      <p class="rounded-full font-sans text-lg lg:text-lg font-bold hover:bg-green-200 w-max p-2 lg:p-4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-7 w-7 inline">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={data.icon} />
                        </svg>
                        <span class="px-5">{data.text}</span>
                      </p>
                  </Link>
                </li>
              ))}
            </ul>
        </div>
    )
}