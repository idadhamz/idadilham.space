import listWork from "@/data/work";

export default function WorkHistory() {
  return (
    <section className="body-font">
      <h1 className="my-5 text-2xl antialiased sm:text-4xl">
        <span className="font-semibold text-green-700 dark:text-green-400">
          Career
        </span>{" "}
        History
      </h1>
      <div className="container flex flex-wrap mx-auto">
        {listWork
          .sort((a, b) => b.id - a.id)
          .map((data, index) => (
            <div
              className="flex flex-col flex-grow sm:flex-row gap-2 sm:gap-4 w-full sm:w-1/3"
              key={index}
            >
              <div className="flex-grow sm:space-y-2 border-2 rounded-2xl p-2 sm:p-4">
                <h1 className="mb-1 text-lg font-semibold leading-relaxed sm:text-xl title-font">
                  {data.job}
                </h1>
                <p className="text-sm sm:text-base">
                  <span className="text-green-700 dark:text-green-400 hover:underline">
                    <a href={data.url}> {data.company}</a>
                  </span>{" "}
                  | {data.date}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
