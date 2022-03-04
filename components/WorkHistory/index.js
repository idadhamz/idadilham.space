import listWork from "@/data/work";

export default function WorkHistory() {
  return (
    <section className="body-font">
      <h1 className="my-10 text-2xl antialiased sm:text-4xl">
        <span className="font-semibold text-green-700 dark:text-green-400">
          Career
        </span>
      </h1>
      <div className="container grid grid-cols-1 sm:grid-cols-3 gap-6 mx-auto">
        {listWork
          .sort((a, b) => b.id - a.id)
          .map((data, index) => (
            <div className="col-span-1 border-2 rounded-2xl px-4" key={index}>
              <div className="sm:space-y-2 py-2 sm:py-4">
                <h1 className="mb-1 text-lg font-semibold leading-relaxed sm:text-xl title-font">
                  {data.job}
                </h1>
                <p className="text-sm sm:text-lg font-light">
                  <span className="text-green-700 dark:text-green-400 hover:underline">
                    <a href={data.url}> {data.company}</a>
                  </span>
                  <br />
                  {data.date}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
