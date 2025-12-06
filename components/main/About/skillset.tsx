"use client";
import Image from "next/image";

import cnFlag from "@/assets/china.png";
import amFlag from "@/assets/us.png";

// import { gsap } from "gsap";
// import { Flip } from "gsap/Flip";
import { useEffect, useRef } from "react";

const StarActive = () => (
  <svg
    className="w-4 h-4 text-yellow-300 ms-1"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 20"
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);

const StarInActive = () => (
  <svg
    className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 20"
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);

export default function SkillSet() {
  const tCNRef = useRef<HTMLDivElement>(null);
  const tENRef = useRef<HTMLDivElement>(null);
  //   const sPlanning = useRef<HTMLDivElement>(null);
  //   const sData = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const cn = tCNRef.current!;
    // const en = tENRef.current!;
    // gsap.registerPlugin(Flip);
    // const state = Flip.getState([cn, en]);
    // const startFlip = () => {};
    // startFlip();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col gap-5 justify-center items-center">
        <div
          className="w-full grid grid-cols-3 gap-1 items-center tracking-wider"
          ref={tCNRef}
        >
          <div className="w-full h-[1px] border-t-2 border-gray-400 border-dotted" />
          <div className="text-center text-base md:text-xl font-bold font-abril  tracking-wider">
            Language
          </div>
          <div className="w-full h-[1px] border-t-2 border-gray-400 border-dotted" />
        </div>
        <div className="w-full grid grid-cols-2 justify-center items-center grid-rows-2 gap-x-3 gap-y-8 font-nunito">
          <div
            className="flex text-sm md:text-base flex-row gap-3 items-center relative"
            ref={tCNRef}
          >
            Mandarin
            <div className="text-xs absolute top-6 left-0 italic">[Native]</div>
            <Image src={cnFlag} width={23} height={23} alt="chinese flag" />
          </div>

          <div className="flex items-center">
            {Array.from({ length: 5 }).map((index, key) => (
              <StarActive key={key} />
            ))}
          </div>
          <div
            className="flex flex-row gap-3 items-center relative text-sm md:text-base"
            ref={tENRef}
          >
            English
            <div className="text-xs absolute top-6 left-0 italic">
              [Conversional]
            </div>
            <Image src={amFlag} width={20} height={20} alt="chinese flag" />
          </div>

          <div className="flex items-center">
            {Array.from({ length: 3 }).map((index, key) => (
              <StarActive key={key} />
            ))}
            {Array.from({ length: 2 }).map((index, key) => (
              <StarInActive key={key} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 justify-center items-center">
        <div className="w-full grid grid-cols-3 gap-1 items-center">
          <div className="w-full h-[1px] border-t-2 border-gray-400 border-dotted" />
          <div className="text-center text-base md:text-xl font-bold font-abril tracking-wider">
            Transferable Skills
          </div>
          <div className="w-full h-[1px] border-t-2 border-gray-400 border-dotted" />
        </div>
        <div className="w-full grid grid-cols-2 justify-center items-center grid-rows-2 gap-x-3 gap-y-5 font-nunito">
          <div className="flex flex-row gap-3 items-center relative text-sm md:text-base">
            Financial Planning
          </div>

          <div className="flex items-center">
            {Array.from({ length: 3 }).map((index, key) => (
              <StarActive key={key} />
            ))}
            {Array.from({ length: 2 }).map((index, key) => (
              <StarInActive key={key} />
            ))}
          </div>
          <div className="flex flex-row gap-3 items-center relative text-sm md:text-base">
            Data Analysis
          </div>

          <div className="flex items-center">
            {Array.from({ length: 3 }).map((index, key) => (
              <StarActive key={key} />
            ))}
            {Array.from({ length: 2 }).map((index, key) => (
              <StarInActive key={key} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
