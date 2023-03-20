import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/header";
import Settings from "../components/setting";
import store from "../core/redux/store";
import { useAppSelector } from "../core/redux/hooks";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Ehtsham</title>
      </Head>
      <Settings />
      <div className="flex flex-col h-screen bg-black top-0 bottom-0 ">
        <div className="sticky top-0 bottom-0 ">
          <Header />
        </div>
        <main className="flex flex-1 h-full w-full flex-col text-primary ">
          okoksdfs
        </main>
        <footer className="sticky flex h-12 w-full text-primary  top-0 bottom-0   ">
          footer
        </footer>
      </div>
    </div>
  );
};

export default Home;
