import type { NextPage } from "next";
import { useEffect } from "react";
import Header from "../components/header";
import Settings from "../components/setting";
import store from "../core/redux/store";
import { useAppSelector } from "../core/redux/hooks";
import { TextLoop } from "react-text-loop-ts";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col h-full w-full justify-center items-center text-center">
        <div className="flex flex-col justify-center items-center space-y-8">
          <div className="flex space-x-4">
            <div className="text-6xl font-semibold text-white"> EHTSHAM</div>
            <div className="text-6xl font-semibold text-primary"> UL HAQ</div>
          </div>
          <div className="w-44 flex flex-row text-start self-center justify-start space-x-2">
            <div className="font-medium text-white"> Composed</div>
            <div className="font-medium text-primary">
              <TextLoop
                texts={["engineer", "developer", "freelancer"]}
                interval={3000}
              />
            </div>
          </div>
          <div className="w-fit rounded-full bg-primary py-2 px-5 font-normal text-white">
            Get in Touch
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
