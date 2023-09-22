import "@/styles/globals.css";
import Router from "next/router";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { ThemeProvider } from "next-themes";

//Font Awesome Icon
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

//Binding events.
Router.events.on("routeChangeStart", () => nprogress.start());
Router.events.on("routeChangeComplete", () => nprogress.done());
Router.events.on("routeChangeError", () => nprogress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
