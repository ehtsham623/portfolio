import React from "react";

interface serfaceInterface {
  serviceIcon: any;
  color: any;
  serviceName: string;
  serviceDisc: string;
}

function Service(props: serfaceInterface) {
  return (
    <>
      <div className="flex justify-start items-start  hover:translate-y-[-20px] transition duration-500">
        <div className="bg-background p-8">
          <div className="flex justify-start items-start">
            <div className=" w-24 flex justify-center items-end">
              <div
                className={`w-[44px] h-[100px] ${props.color} bg-opacity-50 mb-3`}
              />
              <div
                className={`absolute ${props.color} text-white w-[76px] h-[76px] flex items-center justify-center rounded-full`}
              >
                {props.serviceIcon}
              </div>
            </div>
          </div>
          <h3 className="text-white text-[20px] truncate font-bold mt-[20px] mb-[15px]">
            {props.serviceName}
          </h3>
          <p className="text-[17px] indent-0  line-clamp-4 text-ellipsis  text-white dark:text-slate-200">
            {props.serviceDisc}
          </p>
        </div>
      </div>
    </>
  );
}

export default Service;
