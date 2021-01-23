
import Link from 'next/link';
import { useState } from 'react';

import NavContent from '../components/navContent';

export default function Nav(){
    
    const [open, setOpen] = useState(false);

    return(
        <div>
            <ul class="p-10 hidden md:block lg:fixed">
              <Link href="/">
                <img src="https://instagram.fcgk9-2.fna.fbcdn.net/v/t51.2885-19/s320x320/127091039_377152586727817_703580884705788533_n.jpg?_nc_ht=instagram.fcgk9-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=lq-a4PO0nqEAX_XFMii&tp=1&oh=2a3578eb305955027835205b9fb46b65&oe=601CFBAE" alt="foto-dadi-nav" class="w-20 h-auto my-4 lg:w-20 lg:h-auto lg:m-4 p-2 object-cover rounded-2xl border border-gray-300 hover:border-green-700 cursor-pointer"></img>
              </Link>
              <NavContent />
            </ul>
            <div class="flex items-center justify-between px-5 py-5 block md:hidden">
              <div>
                <Link href="/">
                  <img src="https://instagram.fcgk9-2.fna.fbcdn.net/v/t51.2885-19/s320x320/127091039_377152586727817_703580884705788533_n.jpg?_nc_ht=instagram.fcgk9-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=lq-a4PO0nqEAX_XFMii&tp=1&oh=2a3578eb305955027835205b9fb46b65&oe=601CFBAE" alt="foto-dadi-nav" class="w-20 h-auto my-4 lg:w-20 lg:h-auto lg:m-4 p-2 object-cover rounded-2xl border border-gray-300 hover:border-green-700 cursor-pointer"></img>
                </Link>
              </div>
              <button onClick={() => setOpen(!open)} class="text-gray-800 dark:text-white inline-flex items-center justify-center p-5 rounded-md focus:outline-none" aria-label="Burger Menu">
                { open ? 
                  <svg
                  class="h-8 w-8 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                :
                  <svg
                  class="h-8 w-8 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                }
              </button>
            </div>
            <ul class={open ? 'px-5 py-3 block' : 'hidden'}>
              <NavContent />
            </ul>
        </div>
    )
}