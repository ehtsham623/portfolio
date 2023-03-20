import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { waves } from "../components/waves";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "../core/redux/store";
import { useAppSelector } from "../core/redux/hooks";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    return () => {
      waves();
    };
  }, []);

  return (
    <>
      <Provider store={store}>
        <State>
          <ToastContainer />
          <div className="waves" />
          <Component {...pageProps} />
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
