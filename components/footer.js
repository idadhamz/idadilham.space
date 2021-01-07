
import Link from 'next/link';

export default function Footer(){

    const listFooter = [
      { text:'Instagram', href:'https://www.instagram.com/idadcode/'},
      { text:'Instagram', href:'https://www.instagram.com/idadcode/'},
      { text:'Instagram', href:'https://www.instagram.com/idadcode/'},
      { text:'Instagram', href:'https://www.instagram.com/idadcode/'},
    ];

    return(
        <div class="p-10">
            <Link href="/">
                <img src="https://instagram.fcgk9-2.fna.fbcdn.net/v/t51.2885-19/s320x320/127091039_377152586727817_703580884705788533_n.jpg?_nc_ht=instagram.fcgk9-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=lq-a4PO0nqEAX_XFMii&tp=1&oh=2a3578eb305955027835205b9fb46b65&oe=601CFBAE" alt="foto-dadi-nav" class="w-20 h-auto my-4 lg:w-20 lg:h-auto lg:m-4 object-cover rounded-full border-2 border-gray-300 hover:border-green-700 cursor-pointer float-left"></img>
              </Link>
            {/* <ul class="p-10"> */}
            <div class="float-right my-auto">
              {listFooter.map((data) => (
                <Link href={data.href}>
                    <h1 class="mr-2 font-medium text-sm text-gray-500 text-left inline">{data.text}</h1>
                </Link>
              ))}
            </div>
            {/* </ul> */}
        </div>
    )
}