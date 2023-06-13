import React from "react";

function Portfolio() {
  return (
    <div className="flex h-full w-full mt-96 justify-center items-center">
      <div className="flex flex-col w-full md:w-8/12 h-auto mx-5 mt-24 md:mt-0 justify-start sm:justify-center items-start">
        <div className="text-3xl font-bold text-white">
          My <span className="text-primary"> Resume</span>
        </div>
        <span className="w-full border border-t-[1.6px] border-b-0 mt-5 mb-12 border-spacing-8 border-background border-dashed" />
    
      </div>
    </div>
  );
}

export default Portfolio;
