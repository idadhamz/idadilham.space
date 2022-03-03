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
      <div className="container grid grid-cols-1 sm:grid-cols-3 mx-auto">
        {listWork
          .sort((a, b) => b.id - a.id)
          .map((data, index) => (
            <div className="col-span-1 gap-2 sm:gap-4" key={index}>
              <div className="sm:space-y-4 py-2 sm:py-4">
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
