import listWork from "@/data/work";

export default function WorkHistory() {
  return (
    <section className="body-font">
      <h1 className="my-10 text-xl antialiased sm:text-2xl">
        <span className="font-semibold text-green-700 dark:text-green-400">
          Career
        </span>
      </h1>
      <div className="container grid grid-cols-1 sm:grid-cols-3 gap-6 mx-auto">
        {listWork
          .sort((a, b) => b.id - a.id)
          .map((data) => (
            <div className="col-span-1" key={data?.id}>
              <div className="sm:space-y-8 py-2 sm:py-4">
                <h1 className="mb-1 text-base font-semibold leading-relaxed sm:text-xl title-font">
                  {data.job}
                </h1>
                <p className="text-xs sm:text-base font-light">
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
