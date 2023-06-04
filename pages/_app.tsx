import "../styles/globals.css";
import React from "react";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { waves } from "../components/waves";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "../core/redux/store";
import { useAppSelector } from "../core/redux/hooks";
import MainLayout from "../layouts/mainLayout";
import Head from "next/head";

const getFaviconPath = (isDarkMode = false) => {
  return `${
    isDarkMode ? "/white_circle_black_eh.png" : "/white_eh_black_circle.png"
  }`;
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    waves();
  }, []);
  const [faviconHref, setFaviconHref] = useState("/white_eh_black_circle.png");

  useEffect(() => {
    const matcher = window.matchMedia("(prefers-color-scheme: dark)");
    setFaviconHref(getFaviconPath(matcher.matches));
    matcher.onchange = () => setFaviconHref(getFaviconPath(matcher.matches));
  }, [faviconHref]);

  return (
    <>
      <Head>
        <link rel="icon" href={faviconHref} />
        <title>Ehtsham</title>
      </Head>

      <Provider store={store}>
        <State>
          <ToastContainer />
          <div className="waves" />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </State>
      </Provider>
    </>
  );
}

export default MyApp;

function State({ children }: any) {
  const theme = useAppSelector((state) => state.theme);
  return <div data-theme={theme.value}>{children}</div>;
}
