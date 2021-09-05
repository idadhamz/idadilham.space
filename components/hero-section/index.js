import Link from 'next/link';

export default function index() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4">
            <div className="col-span-1">
                <img src="/assets/img/fotoDadi.jfif" alt="fotoHero" className="w-60 h-auto lg:w-80 object-cover rounded-xl" />
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
    )
}
