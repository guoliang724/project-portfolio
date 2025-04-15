import React from "react";
import Seemywork from "./seemywork";

interface ProjectDescriptionProps {
  projectName: string;
  tags: string[];
  projectDescription: string;
  link: string;
  buttonText: string;
  direction:string
}

function ProjectDescription({
  projectDescription,
  tags,
  projectName,
  link,
  buttonText,
  direction
}: ProjectDescriptionProps) {
  const colorPannel = [
    {
      lightbg: "bg-red-100",
      lightText: "text-red-800",
      darkbg: "bg-red-900",
      darkText: "text-red-300",
    },
    {
      lightbg: "bg-green-100",
      lightText: "text-green-800",
      darkbg: "bg-green-900",
      darkText: "text-green-300",
    },
    {
      lightbg: "bg-indigo-100",
      lightText: "text-indigo-800",
      darkbg: "bg-indigo-900",
      darkText: "text-indigo-300",
    },
    {
      lightbg: "bg-yellow-100",
      lightText: "text-yellow-800",
      darkbg: "bg-yellow-900",
      darkText: "text-yellow-300",
    },
  ];
  const badges = tags.map((tag, index) => {
    const colorStyle = colorPannel[index % 4];
    return (
      <span
        key={index}
        className={`${colorStyle.lightText} ${colorStyle.lightbg} dark:${colorStyle.darkbg} dark:${colorStyle.darkText} text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm`}
      >
        {tag}
      </span>
    );
  });

  const directionClass = direction === "left" ? "order-1" : "-order-1";

  return (
    <div className={`${directionClass} flex flex-col gap-2 justify-center items-start`}>
      <div className="uppercase text-gray-400 tracking-widest text-[13px]">
        Latest work
      </div>
      <div className="text-3xl font-bold font-abril tracking-wider mb-3">
        {projectName}
      </div>
      <div className="font-nunito text-sm mb-7">{badges}</div>
      <div className="text-sm tracking-wide font-mulish mb-20">
        {projectDescription}
      </div>
      <Seemywork link={link} text={buttonText} />
    </div>
  );
}

export default ProjectDescription;
