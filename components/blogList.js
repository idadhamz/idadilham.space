import Link from "next/link";

export default function BlogList({ allBlogs }) {
  function reformatDate(fullDate) {
    const date = new Date(fullDate);

    let tahun = date.getFullYear();
    let bulan = date.getMonth();
    let tanggal = date.getDate();

    switch (bulan) {
      case 0:
        bulan = "Jan";
        break;
      case 1:
        bulan = "Feb";
        break;
      case 2:
        bulan = "Mar";
        break;
      case 3:
        bulan = "Apr";
        break;
      case 4:
        bulan = "Mei";
        break;
      case 5:
        bulan = "Jun";
        break;
      case 6:
        bulan = "Jul";
        break;
      case 7:
        bulan = "Agt";
        break;
      case 8:
        bulan = "Sept";
        break;
      case 9:
        bulan = "Okt";
        break;
      case 10:
        bulan = "Nov";
        break;
      case 11:
        bulan = "Des";
        break;
    }

    const date_indo = bulan + " " + tanggal + ", " + tahun;

    return date_indo;
  }

  return (
    <div className="grid grid-cols-1 my-10 md:grid-cols-2">
      {allBlogs.map((blog, index) => (
        <div
          className="w-full col-span-1 mb-3 mr-5 lg:col-span-1 md:w-auto"
          key={index}
        >
          <div className="px-3 py-5 bg-green-400 border rounded-lg cursor-pointer hover:bg-green-300 lg:w-full">
            <Link key={blog.slug} href={{ pathname: `/blog/${blog.slug}` }}>
              <div className="flex flex-col justify-between px-3 py-1 md:flex-row">
                <div className="flex-initial pr-5">
                  <p className="text-lg font-semibold tracking-wide text-white md:text-xl">
                    {blog.frontmatter.title}
                  </p>
                  <p className="my-1 font-normal tracking-wide text-white text-md">
                    {reformatDate(blog.frontmatter.date)}
                  </p>
                </div>
                <div className="flex-initial">
                  <p className="w-full h-auto px-5 py-3 my-3 text-center text-white bg-green-700 rounded-full hover:bg-green-500">
                    Read
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
