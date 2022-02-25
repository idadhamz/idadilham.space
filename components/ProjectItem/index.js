export default function ProjectItem({ data }) {
  return (
    <div className="w-full col-span-1 my-5 mr-5 md:w-auto">
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <div className="px-4 py-8 space-y-8 transition duration-500 bg-gray-200 sm:px-8 sm:py-12 dark:bg-gray-600 hover:border-2 rounded-xl hover:border-green-500">
          <div className="w-auto h-auto">
            <img
              src={data.src}
              alt={data.altText}
              className="object-contain w-full mb-5 sm:object-cover h-80 rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold text-center truncate sm:text-2xl">
              {data.caption}
            </h1>
            <div className="flex flex-wrap justify-center gap-2">
              {data.stack.map((item, index) => (
                <p
                  className="px-2 py-1 text-sm text-center text-white bg-green-500 sm:px-4 sm:py-2 rounded-xl sm:text-base"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
