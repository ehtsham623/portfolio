import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function Contact() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="flex flex-col w-full md:w-8/12 h-auto mx-5 mt-24 md:mt-0 justify-start sm:justify-center items-start">
        <div className="text-3xl font-bold text-white">
          Get in <span className="text-primary"> Touch</span>
        </div>
        <span className="w-full border border-t-[1.6px] border-b-0 mt-5 mb-12 border-spacing-8 border-background border-dashed" />
        <div className="flex flex-col w-full mb-12 md:flex-row space-y-5 md:space-y-0 md:space-x-20">
          <div className="flex flex-col w-full space-y-5">
            <div className="flex flex-row p-3 items-center bg-background rounded-[10px] font-normal text-[15px] text-white">
              <FaLinkedin className="text-base ml-2.5 text-primary" />
              <span className="ml-4 hover:text-primary">
                <Link
                  href="https://www.linkedin.com/in/ehtsham-ul-haq/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  www.linkedin.com/in/ehtsham-ul-haq
                </Link>
              </span>
            </div>
            <div className="flex flex-row p-3 items-center bg-background rounded-[10px] font-normal text-[15px] text-white">
              <BsFillTelephoneFill className="text-base ml-2.5 text-primary" />
              <span className="ml-4 hover:text-primary"> +923057310219</span>
            </div>
            <div className="flex flex-row p-3 items-center bg-background rounded-[10px] font-normal text-[15px] text-white">
              <IoMail className="text-base ml-2.5 text-primary" />
              <span className="ml-4 hover:text-primary">
                <Link
                  href="  mailto:support@ehtshamulhaqat@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  ehtshamulhaqat@gmail.com
                </Link>
              </span>
            </div>
            <div className="flex flex-row p-3 items-center bg-background rounded-[10px] font-normal text-[15px] text-white">
              <FaGithubSquare className="text-base ml-2.5 text-primary" />
              <span className="ml-4 hover:text-primary">
                <Link
                  href="https://github.com/ehtsham623"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://github.com/ehtsham623
                </Link>
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full space-y-5">
            <div className="flex flex-col w-full md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full p-3 pl-5 bg-background rounded-[10px] font-normal text-[15px] text-white">
                Name
              </div>
              <div className="w-full p-3 pl-5 bg-background rounded-[10px] font-normal text-[15px] text-white">
                Email
              </div>
            </div>
            <textarea className="p-3 pl-5 h-full bg-background rounded-[10px] font-normal text-[15px] text-white">
              Message
            </textarea>
            <div className="w-fit rounded-full bg-primary  py-2.5 px-10 font-normal text-white hover:bg-white hover:text-primary hover:cursor-pointer">
              Send message
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
