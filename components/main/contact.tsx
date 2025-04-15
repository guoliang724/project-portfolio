"use client";

import { useTheme } from "next-themes";
export default function Contact() {
  const { theme } = useTheme();

  const isDark = theme === "dark" ? true : false;
  const background = isDark
    ? "linear-gradient(to bottom, transparent 60%, #B8CAF4 40%)"
    : "linear-gradient(to bottom, transparent 60%, #D1A9CD 40%)";

  return (
    <section
      id="section-contact"
      className="min-h-[60vh] h-[60vh] flex justify-center items-center"
    >
      <div className="w-full h-full grid grid-cols-2 grid-rows-1 gap-20 p-14 justify-center items-center">
        <div className="text-5xl font-bold font-abril tracking-wider">
          Want{" "}
          <span
            style={{
              background: background,
            }}
          >
            to work?
          </span>
        </div>
        <div className="font-mulish text-lg tracking-wide">
          If you need a modern and powerful website for your business, startup
          or personally, I am available for work. You can email me directly at{" "}
          <span
            style={{
              background: background,
            }}
          >
            leonzhang.developer@gmail.com.
          </span>
        </div>
      </div>
    </section>
  );
}
