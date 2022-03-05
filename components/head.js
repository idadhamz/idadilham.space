import Head from "next/head";

export default function index({ data }) {
  return (
    <Head>
      {/* Meta Default */}
      <meta charSet="UTF-8"></meta>
      <title>{data.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={data.description} />
      <meta name="keywords" content="dadi, idad, idadilham" />
      <meta
        name="google-site-verification"
        content="QtPLOMbLk5ajIwIdcq0yrxGvpF5Djm9hrsVk7kMl-6g"
      />
      <link rel="shortcut icon" href="/assets/img/fotoVectorIcon.png" />

      {/* CSS Fonts */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&amp;display=swap"
        rel="stylesheet"
      />

      {/* Open Graph */}
      <meta property="og:url" content={data.url} key="ogurl" />
      <meta
        property="og:image"
        content={
          data.img
            ? data.img
            : "https://idadilham.space/assets/img/Idadilham.space.png"
        }
        key="ogimage"
      />
      <meta property="og:site_name" content={data.title} key="ogsitename" />
      <meta property="og:title" content={data.title} key="ogtitle" />
      <meta property="og:description" content={data.description} key="ogdesc" />

      {/* Twitter Graph */}
      <meta
        name="twitter:card"
        content={
          data.img
            ? data.img
            : "https://idadilham.space/assets/img/Idadilham.space.png"
        }
      />
      <meta
        name="twitter:image"
        content={
          data.img
            ? data.img
            : "https://idadilham.space/assets/img/Idadilham.space.png"
        }
      />
      <meta name="twitter:site" content="@idadilham" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
    </Head>
  );
}
