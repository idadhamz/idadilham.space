import Head from "next/head";
import Nav from "@/components/Nav";
import BackText from "@/components/Molecules/BackText";
export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8"></meta>
        <title>{props.titleBlog} | Idadilham</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={props.titleBlog}></meta>
        <meta
          name="google-site-verification"
          content="QtPLOMbLk5ajIwIdcq0yrxGvpF5Djm9hrsVk7kMl-6g"
        />
      </Head>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:divide-x">
          <Nav />
          <div className="col-span-3">
            <div className="p-5 lg:p-12">
              <BackText
                href="blog"
                text="Back to blogs list"
                d_icon="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
