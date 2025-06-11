import React from "react";
import SkillItem from "./skillListItem";
import {
  siFlutter,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siMongodb,
  siVercel,
  siJavascript,
  siTypescript,
  siGithub,
  siHtml5,
  siCss,
  siCplusplus,
  siNodedotjs,
  siMysql,
  siShadcnui,
  siAndroid,
  siIos,
} from "simple-icons";

function Skills() {
  return (
    <div>
      <div className="text-[20px] md:text-[24px] font-medium text-white">
        Coding <span className="text-primary">Skills</span>
      </div>
      <div className="mt-3 mb-16 text-white text-[28px] md:text-4xl font-semibold">
        Below are languages and tools that I am experienced in.
      </div>
      <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3 grid-cols-1 only-md:grid-cols-2">
        <SkillItem
          key={"Web"}
          heading="Web Technologies"
          disc="I have expertise in HTML and CSS for crafting structured and visually appealing web content. I utilize Tailwind CSS for rapid UI development with utility-first styling and ShadCN to create modern, accessible components."
          logos={[siHtml5, siCss, siTailwindcss, siShadcnui]}
        />
        <SkillItem
          key={"Frameworks"}
          heading="Modern Web Frameworks"
          disc="I have hands-on experience with leading frameworks such as Next.js, React.js and Node.Js. I develop large-scale applications and integrate design systems, managing complex states to deliver dynamic, interactive user experiences."
          logos={[siReact, siNextdotjs, siNodedotjs]}
        />
        <SkillItem
          key={"Mobile"}
          heading="Flutter mobile apps"
          disc="I have extensive experience working with Flutter to develop mobile applications. I build feature-rich, scalable apps and implement design systems across both iOS and Android platforms."
          logos={[siFlutter, siAndroid, siIos]}
        />
        <SkillItem
          key={"c"}
          heading="Core Langauge"
          disc="I specialize in JavaScript, TypeScript, and C++ as my core programming languages. With JavaScript and TypeScript, I build dynamic, scalable web applications, while C++ allows me to develop high-performance software and system-level solutions."
          logos={[siJavascript, siTypescript, siCplusplus]}
        />
        <SkillItem
          key={"Databases"}
          heading="Databases Familiarity"
          disc="I design and manage databases using SQL and MongoDB, for structured and unstructured data. I build efficient queries and optimize database performance to ensure scalability, and reliability."
          logos={[siMongodb, siMysql]}
        />
        <SkillItem
          key={"Tools"}
          heading="Helping Tools"
          disc="I deploy applications on Vercel, utilizing its seamless integration and fast build times for optimized performance. I also manage code repositories on GitHub, following best practices for version control."
          logos={[siVercel, siGithub]}
        />

        <div className="w-full lg:max-w-md"></div>
      </div>
    </div>
  );
}

export default Skills;
