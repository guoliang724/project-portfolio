"use client";
import { Button } from "@/components/ui/button";
import styles from "./index.module.scss";

import { useEffect, useRef } from "react";

import { useTheme } from "next-themes";
import gsap from "gsap";
import Link from "next/link";

const INTERVAL = 40;

export default function Home() {
  const { theme } = useTheme();
  const textRef = useRef<HTMLDivElement>(null);
  const content =
    "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.";

  const rGithub = useRef<HTMLSpanElement>(null);
  const rLinkedIn = useRef<HTMLSpanElement>(null);

  const isDark = theme === "dark" ? true : false;
  const background = isDark
    ? "linear-gradient(to bottom, transparent 60%, #B8CAF4 40%)"
    : "linear-gradient(to bottom, transparent 60%, #D1A9CD 40%)";

  const handleClickMyWork = () => {
    location.hash = "#section-work";
  };

  useEffect(() => {
    const el = textRef.current!;
    const totalChars = content.length;

    el.style.setProperty("--ch", "0");

    const tl = gsap.timeline({ repeat: -1, repeatDelay: INTERVAL });

    tl.to(el, {
      duration: totalChars * 0.2,
      ease: "bounce.inOut",
      "--ch": totalChars,
      onUpdate: () => {
        const chVal = Number(gsap.getProperty(el, "--ch"));
        el.textContent = content.slice(0, Math.floor(chVal));
      },
    });

    return () => {
      tl.kill();
    };
  }, [content]);

  useEffect(() => {
    const githubRef = rGithub.current!;
    const linedInRef = rLinkedIn.current!;

    gsap.to([githubRef, linedInRef], {
      scale: 1.1,
      duration: 1,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section
      id="section-home"
      className="bg-[#B8CAF4] dark:bg-[#D1A9CD] grid grid-cols-1 md:grid-cols-3  justify-center items-center min-h-[50vh] md:min-h-[90vh] relative my-10 md:my-auto"
    >
      <div className="hidden absolute top-6 right-36 md:flex flex-row justify-between items-center gap-12 font-mulish text-sm">
        <Link style={{ background }} href="https://github.com/guoliang724">
          <span ref={rGithub} className="inline-block">
            Github
          </span>
        </Link>
        <Link
          style={{ background }}
          href="https://www.linkedin.com/in/leon-zhang-cfp/"
        >
          <span ref={rLinkedIn} className="inline-block">
            LinkedIn
          </span>
        </Link>
      </div>
      <div className="px-5 md:p-0 md:col-span-2 flex flex-col justify-start items-start gap-4 md:pl-28 md:gap-8">
        <div className="text-2xl md:text-3xl font-bold font-abril tracking-wider">
          Hi, I’m Leon,{" "}
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
        <div className="relative text-xs md:text-sm font-nunito mb-5 text-wrap md:w-3/5">
          <div ref={textRef} className={styles.typingText}></div>
          <div className={styles.placeholder}>{content}</div>
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
