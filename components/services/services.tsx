import React from "react";
import Service from "./service";
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { SiAdobecreativecloud } from "react-icons/si";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { RiToolsLine } from "react-icons/ri";
import { CgDebug } from "react-icons/cg";

function Services() {
  return (
    <div>
      <div className="text-[20px] md:text-[24px] font-medium text-white">
        Creative <span className="text-primary">Services</span>
      </div>
      <div className="mt-3 mb-16 text-white text-[28px] md:text-4xl font-semibold">
        Providing a diverse range of customized services to cater my clients'
        needs.
      </div>
      <div className=" grid gap-[30px] md:grid-cols-2 lg:grid-cols-3 grid-cols-1 only-md:grid-cols-2">
        <Service
          serviceIcon={<FaReact className="w-10 h-10 text-white" />}
          color={"bg-blueColor"}
          serviceName="Web Development"
          serviceDisc="Creating elegant web solutions as a Full Stack Developer. Expert in Next.js, React, and Tailwind CSS"
        />
        <Service
          serviceIcon={
            <AiOutlineAppstoreAdd className="w-10 h-10 text-white" />
          }
          color={"bg-greenColor"}
          serviceName="Mobile Apps"
          serviceDisc="Developing, designing cross-platform mobile applications for iOS and Android devices using Flutter"
        />
        <Service
          serviceIcon={
            <SiAdobecreativecloud className="w-10 h-10 text-white" />
          }
          color={"bg-yellowColor"}
          serviceName="Creative Design"
          serviceDisc="Creating user interface and user experience (UI,UX).This involves creating interactive elements and responsive designs."
        />
        <Service
          serviceIcon={<FaDatabase className="w-10 h-10 text-white" />}
          color={"bg-orangeColor"}
          serviceName="Architecture"
          serviceDisc="Understanding client needs. Creating the overall structure including the logic, database design and APIs"
        />
        <Service
          serviceIcon={<CgDebug className="w-10 h-10 text-white" />}
          color={"bg-pinkColor"}
          serviceName="Debugging"
          serviceDisc="End to end testing and debugging to secure the app and ensure the quality and reliability of the application"
        />
        <Service
          serviceIcon={<RiToolsLine className="w-10 h-10 text-white" />}
          color={"bg-salmonColor"}
          serviceName="Maintenance"
          serviceDisc="Providing maintenance and updates. Deploying up to date application to production environments"
        />
      </div>
    </div>
  );
}

export default Services;
