import { Fragment, SVGProps, useEffect, useRef, useState } from "react";
import { Cog8ToothIcon } from "@heroicons/react/20/solid";
import store from "../core/redux/store";
import { updateTheme } from "../core/slice/themesSlice";

export default function Settings() {
  const [isMoved, setIsMoved] = useState(false);
  const handleMoveClick = () => {
    setIsMoved((prevState) => !prevState);
  };
  const themes = [
    "blue",
    "green",
    "yellow",
    "pink",
    "orange",
    "salmon",
    "purple",
    "skyblue",
    "cadetblue",
    "tartorange",
    "olive",
    "red",
  ];
  return (
    <>
      <div className="fixed z-10 right-0 top-[30%] text-white ">
        <div className={`duration-500  ${isMoved ? "translate-x-52" : ""}`}>
          <div className="flex flex-row">
            <div
              onClick={handleMoveClick}
              className="h-12 p-3 bg-background hover:cursor-pointer"
            >
              <Cog8ToothIcon className="h-6 w-6 rotate-180 animate-spin" />
            </div>
            <div className="flex flex-col w-52 px-5 pt-10 pb-6 bg-background">
              <div className="text-white font-semibold text-sm pb-5 text-center underline underline-offset-4">
                Change Theme
              </div>
              <div className="flex flex-wrap ">
                {themes.map((theme, index) => (
                  <div
                    data-theme={theme}
                    className={`w-8 h-8 m-1 rounded-full bg-primary hover:cursor-pointer`}
                    key={index}
                    onClick={() => {
                      store.dispatch(updateTheme(theme));
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
