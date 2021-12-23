export default function ProjectItem({ data }) {
  return (
    <div className="w-full col-span-1 my-5 mr-5 md:w-auto">
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <div className="px-4 py-8 sm:px-8 sm:py-12 space-y-8 transition duration-500 bg-gray-200 dark:bg-gray-600 hover:border-2 rounded-xl hover:border-green-500">
          <div className="w-auto h-auto">
            <img
              src={data.src}
              alt={data.altText}
              className="object-cover w-full mb-5 h-80 rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-center truncate">
              {data.caption}
            </h1>
            <div className="flex justify-center gap-2">
              {data.stack.map((item, index) => (
                <p
                  className="px-4 py-2 text-sm text-center text-white lowercase bg-green-500 rounded-xl sm:text-base"
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
