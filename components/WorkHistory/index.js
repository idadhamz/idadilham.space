import listWork from "@/data/work";

export default function WorkHistory() {
  return (
    <section className="body-font">
      <h1 className="my-5 text-xl sm:text-3xl antialiased">
        <span className="font-semibold text-green-700 dark:text-green-400">
          Work
        </span>{" "}
        History
      </h1>
      <div className="container flex flex-wrap mx-auto">
        {listWork
          .sort((a, b) => b.id - a.id)
          .map((data, index) => (
            <div
              className="relative flex items-start pt-5 pb-5 md:w-1/3"
              key={index}
            >
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-12 h-12 text-lg font-medium text-white bg-green-500 rounded-full sm:mt-0 title-font">
                {index + 1}
              </div>
              <div className="flex flex-col items-center flex-grow pl-6 md:pl-2 sm:items-center sm:flex-row">
                <div className="flex-grow sm:pl-6 sm:space-y-2">
                  <h1 className="mb-1 text-xl font-semibold leading-relaxed title-font">
                    {data.job}
                  </h1>
                  <p className="text-lg">
                    <span className="text-green-700 dark:text-green-400 hover:underline">
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
