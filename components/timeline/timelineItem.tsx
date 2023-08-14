import React from "react";
interface timelineInterface {
  heading?: string;
  heading2?: string;
  disciption?: string;
  time?: string;
}

function TimelineItem(props: timelineInterface) {
  return (
    <div>
      <div className="flex">
        <div className="flex -ml-[13px] h-6 w-6 items-center justify-center rounded-full bg-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 p-1"
          >
            <path
              fill-rule="evenodd"
              d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="mb-10 ml-6 block lg:max-w-md rounded-md p-6 bg-background ">
          <div className="mb-4 flex space-x-2">
            <p className="text-sm text-primary transition duration-150 ease-in-out truncate">
              {props.heading}
            </p>
            <div className="bg-primary px-2 pt-0.5 rounded-xl text-white text-sm">
              {props.heading2}
            </div>
          </div>
          <p className="mb-6 text-white">{props.disciption}</p>
          <div className="text-sm text-primary transition duration-150 ease-in-out">
            {props.time}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
