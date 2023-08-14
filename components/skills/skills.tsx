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
          <SkillItem heading="Flutter" percentage="100" />
          <SkillItem heading="React.js" percentage="80" />
          <SkillItem heading="Next.js" percentage="90" />
          <SkillItem heading="Tailwind css" percentage="100" />
          <SkillItem heading="MongoDB" percentage="70" />
          <SkillItem heading="Vercel" percentage="100" />
        </div>

        <div className="w-full lg:max-w-md">
          <SkillItem heading="JS/TS" percentage="80" />
          <SkillItem heading="Git" percentage="90" />
          <SkillItem heading="Api's" percentage="100" />
          <SkillItem heading="Html" percentage="100" />
          <SkillItem heading="Css" percentage="90" />
          <SkillItem heading="Java" percentage="50" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
