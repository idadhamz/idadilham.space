
import Link from 'next/link';
import { useRouter } from "next/router";

export default function Nav(){

    const router = useRouter();

    const listNavs = [
      { text:'Idadcode', href:'/' },
      { text:'Project', href:'/project' },
      { text:'Blog', href:'/blog' },
      { text:'Contact', href:'/contact' },
    ];

    return(
        <div>
            <ul class="px-5 py-10 space-y-3">
              {listNavs.map((data) => (
                <li class={router.pathname == data.href ? "rounded-xl bg-green-700 text-white" : ""}>
                  <Link href={data.href}>
                      <p class="rounded-xl font-sans text-xl font-bold border border-grey-700 hover:border-green-700 text-left p-4 cursor-pointer">{data.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
        </div>
    )
}