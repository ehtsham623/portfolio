import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r68/three.min.js"
        // strategy="lazyOnload"
        // onLoad={() =>
        //   console.log(`script loaded correctly, window.FB has been populated`)
        // }
      />
      <Script
        src="script.js"
        // strategy="lazyOnload"
        // onLoad={() =>
        //   console.log(`script loaded correctly, window.FB has been populated`)
        // }
      />
      <div className="" data-theme="green">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
