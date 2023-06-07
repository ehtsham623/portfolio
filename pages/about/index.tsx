import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function About() {
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
    <div className="flex h-full w-full justify-center items-center">
      <div className="flex flex-col h-full sm:h-auto sm:flex-row justify-start sm:justify-center items-start">
        <div className="m-4 sm:w-[360px] sm:h-[360px]">
          <Image
            src={"/eht.png"}
            alt="Picture of the author"
            className="rounded-lg w-auto h-auto"
            blurDataURL="Data url"
            placeholder="blur"
            width="0"
            height="0"
            sizes="100vw"
            priority
          />
        </div>
        <div className="flex flex-col ml-4 mr-2 sm:ml-14 my-4 justify-center items-start self-start">
          <div className="flex flex-row space-x-2 text-[32px] font-bold">
            <div className="text-white">
              EHTSHAM <span className="text-primary">UL HAQ</span>
            </div>
          </div>
          <div className="flex flex-row mb-6 mt-3 font-medium text-lg space-x-2 justify-start">
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
          <span className="w-full border border-t-[1.6px] border-b-0 border-spacing-8 border-background border-dashed" />
          <p className="mt-8 text-textSecondary text-[15px] font-sans font-light leading-6 max-w-md min-w-full mb-8 ">
            My name is <span className="text-white"> Ehtsham ul haq.</span> I am
            a Software engineer, and I'm very passionate and dedicated to my
            work. With 4 years experience in development, I have acquired the
            skills and knowledge. My key skills are
            <span className="text-white font-semibold">
              {" "}
              Flutter, Nextjs, Reactjs
            </span>
          </p>
          <div className="w-fit rounded-full bg-primary  py-3 px-10 font-normal text-white hover:bg-white hover:text-primary hover:cursor-pointer">
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
