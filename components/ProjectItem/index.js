export default function ProjectItem({ data }) {
  return (
    <div className="w-full col-span-1 my-5 mr-5 md:w-auto">
      <div>
        <div className="w-auto h-auto">
          <img
            src={data.src}
            alt={data.altText}
            className="object-cover w-full transition duration-500 ease-in-out transform h-80 hover:scale-105"
          />
        </div>
        <div className="flex justify-between px-2 py-5 space-x-2">
          <div className="flex-initial">
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              <h1 className="text-lg font-semibold text-left text-gray-800 cursor-pointer hover:text-green-700 hover:underline">
                {data.caption}
              </h1>
            </a>
            {data.stack.map((item, index) => (
              <h1
                className="inline mr-2 text-sm font-medium text-left text-gray-500"
                key={index}
              >
                {item}
              </h1>
            ))}
          </div>
          <div className="flex-initial">
            {data.type === "Website" ? (
              <p className="px-4 py-2 text-sm text-white bg-green-700 rounded-full w-min">
                {data.type}
              </p>
            ) : (
              <p className="px-4 py-2 text-sm text-white bg-blue-700 rounded-full w-min">
                {data.type}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
