import React from "react";
import Services from "../../components/services/services";
import Timeline from "../../components/timeline/timeline";

function Portfolio() {
  return (
    <div className="flex w-full justify-center items-start mt-24">
      <div className="flex flex-col w-full md:w-9/12 mx-5 justify-start sm:justify-start items-start">
        <Services />
        <div className="h-24"></div>
        <Timeline />
      </div>
    </div>
  );
}

export default Portfolio;
