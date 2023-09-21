export default function ProjectItem({ data }) {
  return (
    <div className="w-full col-span-1 md:w-auto">
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <div className="p-4 space-y-8 transition duration-500 bg-gray-200 sm:p-8 dark:bg-gray-600 hover:border-2 rounded-xl hover:border-green-500">
          <div className="w-auto h-auto">
            <img
              src={data.src}
              alt={data.altText}
              className="object-contain w-full h-auto mb-5 sm:object-cover sm:h-80 rounded-xl"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-semibold truncate sm:text-xl">
              {data.caption}
            </h1>
            <div className="flex flex-wrap gap-2">
              {data.stack.map((item) => (
                <p
                  className="text-xs text-gray-400 hover:text-white sm:text-base uppercase cursor-default"
                  key={item}
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
