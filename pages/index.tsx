import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../components/header";
import Settings from "../components/setting";
import store from "../core/redux/store";
import { useAppSelector } from "../core/redux/hooks";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { contactRoute } from "../configs/routePaths";

const Home: NextPage = () => {
  const [composeValue, setComnposeValue] = useState("Software engineer");

  useEffect(() => {
    setTimeout(() => {
      if (composeValue == "Software engineer") {
        setComnposeValue("Developer");
      } else if (composeValue == "Developer") {
        setComnposeValue("Freelancer");
      } else {
        setComnposeValue("Software engineer");
      }
    }, 3000);
  }, [composeValue]);

  return (
    <>
      <div className="flex flex-col h-full w-full justify-center items-center text-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row space-x-2 sm:space-x-4 text-2xl  sm:text-6xl font-bold">
            <div className="text-white">
              EHTSHAM <span className="text-primary">UL HAQ</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mb-8 mt-8 font-medium text-xl sm:text-2xl space-x-2 self-center text-center justify-start">
            <div className="text-textSecondary"> Composed</div>
            <div className="text-primary w-auto ">
              <AnimatePresence mode="wait">
                <motion.div
                  key={composeValue}
                  initial={{ scaleY: 0 }}
                  animate={{
                    scaleY: 1,
                    transition: { duration: 0.2 },
                  }}
                  exit={{
                    scaleY: 0,
                    transition: { duration: 0.2 },
                  }}
                  className="text-white"
                >
                  {composeValue}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <Link href={contactRoute}>
            <div className="w-fit rounded-full bg-primary  py-3 px-10 font-normal text-white hover:bg-white hover:text-primary hover:cursor-pointer">
              Get in Touch
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
