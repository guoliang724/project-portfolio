"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect } from "react";

import reactLogo from "@/assets/atom.png";
import vueLogo from "@/assets/Vue.png";
import azureLogo from "@/assets/Azure.png";
import electronLogo from "@/assets/electron.svg";
import figmaLogo from "@/assets/figma.png";
import nodejsLogo from "@/assets/nodejs.svg";
import netCoreLogo from "@/assets/NET Core.png";
import tailwindLogo from "@/assets/tailwind.svg";
import nextJsLogo from "@/assets/nextjs.svg";

export default function TechStack() {
  const stacks = [
    { name: "React", icon: reactLogo, duration: "over 3 years" },
    { name: "Vue", icon: vueLogo, duration: "over 2 years" },
    { name: "TailWind", icon: tailwindLogo, duration: "over 2 years" },
    { name: "Next.js", icon: nextJsLogo, duration: "over 2 years" },
    { name: "Node.js", icon: nodejsLogo, duration: "over 3 years" },
    { name: ".NET Core", icon: netCoreLogo, duration: "over 2 years" },
    { name: "Electron", icon: electronLogo, duration: "over 3 years" },
    { name: "Figma", icon: figmaLogo, duration: "over 1 year" },
    { name: "Azure", icon: azureLogo, duration: "over 2 years" },
  ];

  const StacksList = stacks.map((stack, index) => {
    let width = 60,
      height = 60;
    if (stack.name === "Figma") {
      width = 40;
      height = 40;
    }
    return (
      <div
        key={index}
        className="flex flex-col md:gap-x-2 justify-center items-center"
        data-stack-item
      >
        <div className="md:w-25 md:h-15  w-8 h-4 flex justify-center items-center mb-3 md:mb-0">
          <Image
            src={stack.icon}
            width={width}
            height={height}
            alt="stack icon"
          />
        </div>
        <div className="text-sm md:text-base font-nunito font-semibold">
          {stack.name}
        </div>
        <div className="text-xs md:text-[14px] font-mulish text-gray-400 text-center">
          {stack.duration}
        </div>
      </div>
    );
  });

  useEffect(() => {
    const items = gsap.utils.toArray("[data-stack-item]");

    gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.7,
        ease: "back.out(1.7)",
        repeat: -1,
        yoyo: true,
        repeatDelay: 1.5,
      }
    );
  }, []);

  return StacksList;
}
