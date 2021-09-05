import listWork from '../../data/work';

export default function index() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap">

                {listWork.map((data, index) => (

                    <div className="flex relative pt-5 pb-5 items-center md:w-1/2" key={index}>
                        <div className="flex-shrink-0 w-12 h-12 rounded-full sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-lg">{index + 1}</div>
                        <div className="flex-grow md:pl-2 pl-6 flex sm:items-center items-center flex-col sm:flex-row">
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h1 className="font-bold title-font text-black mb-1 text-xl pr-5">{data.job}</h1>
                                <p><span className="font-semibold text-green-700 hover:underline"><a href={data.url}> {data.company}</a></span> <br />({data.date})</p>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </section>
    )
}
