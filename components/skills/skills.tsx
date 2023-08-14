import React from "react";
import SkillItem from "./skillListItem";

function Skills() {
  return (
    <div>
      <div className="text-[20px] md:text-[24px] font-medium text-white">
        Coding <span className="text-primary">Skills</span>
      </div>
      <div className="mt-3 mb-16 text-white text-[28px] md:text-4xl font-semibold">
        Below is a glimpse into my proficiency across a range of coding
        languages and tools.
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row justify-between md:space-x-16">
        <div className="lg:max-w-md w-full ">
          <SkillItem
            key={"Flutter"}
            heading="Flutter"
            percentage="100"
            width="w-[100%]"
          />
          <SkillItem
            key={"React"}
            heading="React.js"
            percentage="80"
            width="w-[80%]"
          />
          <SkillItem
            key={"Next"}
            heading="Next.js"
            percentage="90"
            width="w-[90%]"
          />
          <SkillItem
            key={"Tailwind"}
            heading="Tailwind css"
            percentage="100"
            width="w-[100%]"
          />
          <SkillItem
            key={"MongoDB"}
            heading="MongoDB"
            percentage="70"
            width="w-[70%]"
          />
          <SkillItem
            key={"Vercel"}
            heading="Vercel"
            percentage="100"
            width="w-[100%]"
          />
        </div>
        <div className="w-full lg:max-w-md">
          <SkillItem
            key={"JS"}
            heading="JS/TS"
            percentage="80"
            width="w-[80%]"
          />
          <SkillItem
            key={"Git"}
            heading="Git"
            percentage="90"
            width="w-[90%]"
          />
          <SkillItem
            key={"Api"}
            heading="Api's"
            percentage="100"
            width="w-[100%]"
          />
          <SkillItem
            key={"Html"}
            heading="Html"
            percentage="100"
            width="w-[100%]"
          />
          <SkillItem
            key={"Css"}
            heading="Css"
            percentage="90"
            width="w-[90%]"
          />
          <SkillItem
            key={"Java"}
            heading="Java"
            percentage="50"
            width="w-[50%]"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
