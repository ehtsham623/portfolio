import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r68/three.min.js" />
      <script src="script.js" />
      <div className="" data-theme="green">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
