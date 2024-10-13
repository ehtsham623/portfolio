import Image from "next/image";
import {
  siPuppeteer,
  siGooglegemini,
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siDocker,
  siFlydotio,
  siGithub,
  siMongodb,
  siIcon,
  siLinkfire,
  siFlutter,
  siJavascript,
  siReact,
  siNodedotjs,
  siVercel,
} from "simple-icons";
function Projects() {
  const projects = [
    {
      title: "Auditor",
      link: "https://auditor.quix.gg",
      preview: "/placeholder.svg",
      description:
        "Auditor is a web platform designed to audit other websites by analyzing their performance, visual content, and structure.",
      features: [
        "Screenshot Capture in Multiple Sizes",
        "Load Time Analysis",
        "AI-Based Overviews",
        "Performance Insights",
        "User-Friendly Reports",
      ],
      tools: [
        siPuppeteer,
        siGooglegemini,
        siTypescript,
        siTailwindcss,
        siDocker,
        siFlydotio,
      ],
    },
    {
      title: "Quix",
      link: "https://quix.gg/",
      preview: "/placeholder.svg",
      description:
        "The website effectively represents Quix brand and services, attracting potential clients and improving online visibility.",
      features: [
        "Showcase projects",
        "Team members",
        "Clients Overview",
        "About and contact",
      ],
      tools: [siPuppeteer, siTypescript, siTailwindcss, siDocker, siFlydotio],
    },
    {
      title: "Movitronic",
      link: "https://rentalmoose.com/",
      preview: "/placeholder.svg",
      description:
        "This platform has successfully addressed the needs of car renters, making the process straightforward and efficient. With Rentalmoose, users can confidently plan their journeys without hassle.",
      features: [
        "Rent cars",
        "Tacker to show vehicles on google map",
        "Blutooth connection",
        "Offline access using bluetooth",
        "Car tracking",
        "Hardware access throug app",
      ],
      tools: [siFlutter, siJavascript, siReact, siNodedotjs],
    },
    {
      title: "Wego",
      link: "https://www.linkedin.com/in/ehtsham-ul-haq/details/projects/",
      preview: "/placeholder.svg",
      description:
        "The platform revolutionizes urban transportation, providing a reliable and user-friendly experience for commuters, users can navigate their journeys with confidence and ease.",
      features: [
        "On-Demand Booking",
        "Multiple Gigs creation",
        "Wallet Integration",
        "User Profiles",
        "Web admin portal",
        "Add vehicles",
      ],
      tools: [
        siFlutter,
        siJavascript,
        siReact,
        siNextdotjs,
        siVercel,
        siTailwindcss,
        siNodedotjs,
      ],
    },
    {
      title: "SeelenSpa",
      link: "https://apps.apple.com/us/app/seelenspa/id1616774663",
      preview: "/placeholder.svg",
      description:
        "SeelenSpa provides a nurturing space for women to cultivate their unique gifts, deepen their perception, and enrich the world around them. Embark on a journey of self-discovery and empowerment with SeelenSpa.",
      features: ["Book reading", "Regular Messages", "Community Space", "Auth"],
      tools: [siFlutter, siJavascript, siReact, siNodedotjs],
    },
  ];
  return (
    <div className="flex w-full justify-center mt-24 pb-24 items-start">
      <div className="flex flex-col w-full md:w-9/12 mx-5 justify-start sm:justify-start items-start space-y-28">
        {projects.map((project) => {
          return (
            <div
              key={project.title}
              className="flex flex-col lg:flex-row  items-end bg-background bg-opacity-90 p-8 rounded-lg"
            >
              <div className="w-full lg:w-1/2 flex flex-col justify-center ">
                <h1 className="text-3xl text-primary md:text-5xl mb-6 md:mb-10 flex">
                  {project.title}
                  <a className="ml-4" href={project.link} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      width={25}
                      height={25}
                      fill="white"
                      aria-label={siLinkfire.title}
                      className=""
                    >
                      <path d={siLinkfire.path} />
                    </svg>
                  </a>
                </h1>
                <p className="text-2xl md:text-3xl text-white">
                  {project.description}
                </p>
                <ul className="text-xl pt-10 text-white">
                  {project.features.map((feature) => {
                    return <li key={feature}>- {feature}</li>;
                  })}
                </ul>
                <div className="flex gap-10 pt-10">
                  {project.tools.map((tool, index) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      width={25}
                      height={25}
                      fill="white"
                      aria-label={tool.title}
                      className=""
                    >
                      <path d={tool.path} />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 pt-10 lg:pt-0 flex items-center justify-center gap-6">
                <Image
                  src={project.preview}
                  width={450}
                  height={450}
                  alt="Picture of the author"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
