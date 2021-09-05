import Link from 'next/link';

export default function index({ data }) {
    return (
        <div className="col-span-1 my-5 mr-5 w-full md:w-auto">
            <div>
                <div className="w-auto h-auto">
                    <img src={data.src} alt={data.altText} className="w-full h-80 object-cover transition duration-500 ease-in-out transform hover:scale-105" />
                </div>
                <div className="px-2 py-5 flex space-x-2 justify-between">
                    <div className="flex-initial">
                        <Link href={data.url}>
                            <h1 className="font-semibold text-lg text-gray-800 text-left hover:text-green-700 hover:underline cursor-pointer">{data.caption}</h1>
                        </Link>
                        {data.stack.map((item, index) => (
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
}
