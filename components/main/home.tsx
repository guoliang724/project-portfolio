"use client";
import { Button } from "@/components/ui/button";

import { useTheme } from "next-themes";
import Link from "next/link";

export default function Home() {
  const { theme } = useTheme();

  const isDark = theme === "dark" ? true : false;
  const background = isDark
    ? "linear-gradient(to bottom, transparent 60%, #B8CAF4 40%)"
    : "linear-gradient(to bottom, transparent 60%, #D1A9CD 40%)";

  const handleClickMyWork = () => {
    location.hash = "#section-work";
  };
  return (
    <section
      id="section-home"
      className="bg-[#B8CAF4] dark:bg-[#D1A9CD] grid grid-cols-1 md:grid-cols-3  justify-center items-center min-h-[50vh] md:min-h-[90vh] relative my-10 md:my-auto"
    >
      <div className="hidden absolute top-6 right-36 md:flex flex-row justify-between items-center gap-12 font-mulish text-sm">
        <Link style={{ background }} href="https://github.com/guoliang724">
          Github
        </Link>
        <Link
          style={{ background }}
          href="https://www.linkedin.com/in/leon-zhang-cfp/"
        >
          LinkedIn
        </Link>
      </div>
      <div className="px-5 md:p-0 md:col-span-2 flex flex-col justify-start items-start gap-4 md:pl-28 md:gap-8">
        <div className="text-2xl md:text-3xl font-bold font-abril tracking-wider">
          Hi, I&rsquo;m Leon,{" "}
          <span
            style={{
              background: background,
            }}
          >
            Front-end
          </span>{" "}
          Developer
          <br />
          and <span style={{ background: background }}>.Net</span> Developer
        </div>
        <div className="text-xs md:text-sm font-nunito mb-5 text-wrap md:w-3/5">
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services and online stores
        </div>
        <div className="relative">
          <Button
            onClick={handleClickMyWork}
            className="font-mulish text-[12px] md:text-[14px] cursor-pointer z-10 w-30 rounded-none flex justify-center items-center bg-gray-800 dark:bg-white shadow-md "
          >
            see my work
          </Button>
          <div className="absolute left-[5px] top-2 border-2  border-gray-800 w-30 h-8 z-0 dark:border-white pointer-events-none"></div>
        </div>
        <div className="hidden md:block w-[2px] h-28 bg-black dark:bg-white absolute -bottom-8 right-1/4">
          <div
            style={{ writingMode: "vertical-lr" }}
            className="text-sm tracking-widest font-nunito absolute"
          >
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
}

// #D1A9CD  #B8CAF4
// Abril Fatface Regular
// Nunito Regular
// Muli
// F
