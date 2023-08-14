import React from "react";
import TimelineItem from "./timelineItem";

function Timeline() {
  return (
    <div>
      <div className="text-[20px] md:text-[24px] font-medium text-white">
        Experince <span className="text-primary">Timeline</span>
      </div>
      <div className="mt-3 mb-16 text-white text-[28px] md:text-4xl font-semibold">
        Let's walk through my significant career milestones that define my
        journey.
      </div>
      <div className="flex flex-col md:flex-col lg:flex-row justify-between lg:space-x-16">
        <div className="border-l-2 border-white">
          <TimelineItem
            heading="Software engineer"
            heading2="Technowis"
            disciption="I began my journey at Technowis as a software engineer, specializing in Flutter development. Through dedication and skill, I quickly progressed to senior positions, assuming greater responsibilities and directly engaging with clients"
            time="Sept 2021 - present"
          />

          <TimelineItem
            heading="Advanced Web Development"
            heading2="Udemy"
            disciption="I gained expertise in React.js and Tailwind CSS. Advancing to Next.js, I achieved mastery and successfully executed multiple dynamic web projects"
            time="Aug 2022"
          />

          <TimelineItem
            heading="Flutter Developer"
            heading2="Freelancing"
            disciption="I acquired Flutter expertise through online resources, securing my debut freelance project (MOVITRONIC) in the field. This initial success paved my path to a full-time Flutter developer"
            time="Jan 2021"
          />
        </div>

        <div className="border-l-2 border-white">
          <TimelineItem
            heading="Android Developer"
            heading2="Wapexp"
            disciption="
            I completed an Android development course with Wapexp, followed by a successful internship. This experience transitioned into my first job as an Android Developer"
            time="2020 - 2021"
          />
          <TimelineItem
            heading="Web Developer"
            heading2="Technolangs"
            disciption="
            I enhanced my web development skills by mastering HTML, CSS, and basic SQL techniques. Gaining insights into website functionality, I successfully transformed PSD designs into interactive websites"
            time="Jul 2019"
          />
          <TimelineItem
            heading="Bachelor's Degree (BSCS)"
            heading2="GCUF"
            disciption="I did my Bachelor's Degree in computer science from Government college university Faisalabad.Within this academic exploration, my intrigue for development and coding was sparked"
            time="2016 - 2020"
          />
        </div>
      </div>
    </div>
  );
}

export default Timeline;
