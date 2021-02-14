
import Link from 'next/link';
import { useState } from 'react';

import NavContent from '../components/navContent';

export default function Nav(){
    
    const [open, setOpen] = useState(false);

    return(
        <div>
            <ul class="p-10 hidden md:block lg:fixed">
              <Link href="/">
                <img src="/assets/img/fotoVector.jpg" alt="foto-dadi-nav" class="w-20 h-auto my-4 lg:w-20 lg:h-auto lg:m-4 p-2 object-cover rounded-2xl border border-gray-300 hover:border-green-700 cursor-pointer"></img>
              </Link>
              <NavContent />
            </ul>
            <div class="flex items-center justify-between px-5 py-5 block md:hidden">
              <div>
                <Link href="/">
                  <img src="/assets/img/fotoVector.jpg" alt="foto-dadi-nav" class="w-20 h-auto my-4 lg:w-20 lg:h-auto lg:m-4 p-2 object-cover rounded-2xl border border-gray-300 hover:border-green-700 cursor-pointer"></img>
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