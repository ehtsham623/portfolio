import React from "react";

interface Logo {
  title: string;
  path: string;
}

interface skillsInterface {
  heading: string;
  disc: string;
  logos: Logo[];
}

function SkillItem(props: skillsInterface) {
  return (
    <div className="bg-background py-8 px-4 ">
      <div className="flex justify-center items-center space-x-4 mb-6">
        {props.logos.map((logo, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="img"
            width={40}
            height={40}
            fill="white"
            aria-label={logo.title}
            className=""
          >
            <path d={logo.path} />
          </svg>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <span className="text-primary text-[20px] truncate font-bold">
          {props.heading}
        </span>
        <span className="text-[16px] text-white dark:text-slate-200 text-center">
          {props.disc}
        </span>
      </div>
    </div>
  );
}

export default SkillItem;
