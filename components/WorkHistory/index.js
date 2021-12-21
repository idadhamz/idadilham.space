import listWork from "@/data/work";

export default function WorkHistory() {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="my-5 text-2xl antialiased text-gray-700 lg:text-3xl">
        <span className="font-bold text-green-700">Work</span> History
      </h1>
      <div className="container flex flex-wrap mx-auto">
        {listWork.map((data, index) => (
          <div
            className="relative flex items-center pt-5 pb-5 md:w-1/2"
            key={index}
          >
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-12 h-12 text-lg font-medium text-white bg-green-500 rounded-full sm:mt-0 title-font">
              {index + 1}
            </div>
            <div className="flex flex-col items-center flex-grow pl-6 md:pl-2 sm:items-center sm:flex-row">
              <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
                <h1 className="pr-5 mb-1 text-xl font-bold text-black title-font">
                  {data.job}
                </h1>
                <p>
                  <span className="font-semibold text-green-700 hover:underline">
                    <a href={data.url}> {data.company}</a>
                  </span>{" "}
                  <br />({data.date})
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
