import type { NextPage } from "next";
import { useEffect } from "react";
import Header from "../components/header";
import Settings from "../components/setting";
import store from "../core/redux/store";
import { useAppSelector } from "../core/redux/hooks";

const Home: NextPage = () => {
  return (
    <>
      <div>home</div>
    </>
  );
};

export default Home;
