import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Ehtsham - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex h-12 w-full sticky top-0 bottom-0 items-center bg-slate-500 justify-center ">
        qa header
      </header>
      <main className="flex w-full flex-1 flex-col items-center justify-center text-9xl  bg-slate-600 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis est
        aliquam illum harum dolores, dignissimos itaque voluptate incidunt
        culpa, ipsum aliquid quaerat. Quidem recusandae tempore sit deleniti
        nemo a ab.
      </main>
      <footer className="flex h-12 w-full  sticky top-0 bottom-0 bg-slate-500 items-center justify-center ">
        footer
      </footer>
    </div>
  );
};

export default Home;
