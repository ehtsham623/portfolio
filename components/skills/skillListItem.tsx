import React from "react";
interface skillsInterface {
  heading: string;
  percentage: string;
  width: string;
}

function SkillItem(props: skillsInterface) {
  return (
    <>
      <div className="relative mb-5">
        <div className="flex justify-start mb-1 space-x-4">
          <span className="text-lg font-medium text-white">
            {props.heading}
          </span>
          <span className="text-xs font-medium text-white bg-primary  py-1.5 px-1.5 rounded-sm ">
            {props.percentage + "%"}
          </span>
        </div>
        <div className="w-full rounded-full h-[10px] bg-background flex items-center">
          <div
            className={`${props.width} bg-primary h-[6px] rounded-full mx-[2px]`}
          ></div>
        </div>
      </div>
    </>
  );
}

export default SkillItem;
