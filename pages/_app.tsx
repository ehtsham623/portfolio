import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { waves } from "././waves";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    return () => {
      waves();
    };
  }, []);

  return (
    <>
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r68/three.min.js" />
      <script src="script.js" /> */}
      <div className="" data-theme="green">
        <Component {...pageProps} />
        <div className="waves" />
      </div>
    </>
  );
}

export default MyApp;
