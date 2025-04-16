"use client";

import { useTheme } from "next-themes";
export default function Testimonial() {
  const { theme } = useTheme();

  const isDark = theme === "dark" ? true : false;
  const background = isDark
    ? "linear-gradient(to bottom, transparent 60%, #B8CAF4 40%)"
    : "linear-gradient(to bottom, transparent 60%, #D1A9CD 40%)";

  return (
    <section
      id="section-task"
      className="md:min-h-[80vh] md:h-[80vh] bg-sky-50 dark:bg-[#D1A9CD]  md:my-10"
    >
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2  md:grid-rows-2 gap-x-20 gap-y-10 p-10 md:p-14 justify-start items-start">
        <div className="text-2xl md:text-3xl font-bold font-abril tracking-wider">
          What{" "}
          <span
            style={{
              background: background,
            }}
          >
            I do
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="font-nunito text-lg md:text-lg font-bold tracking-wide">Design</div>
          <div className="font-mulish text-xs md:text-sm">
            I design beautiful and powerful websites for modern business. Any
            business today needs a website that winds customers&apos; trust and
            helps you do your business well. I make sure your website is up tp
            that standard
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-nunito text-lg md:text-lg font-bold tracking-wide">Development</div>
          <div className="font-mulish text-xs md:text-sm">
            I build websites in the latest technologies and frameworks where I
            can create responsive, powerful and fully custom websites.
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-nunito text-lg md:text-lg font-bold tracking-wide">Deployment</div>
          <div className="font-mulish text-xs md:text-sm">
            I deploy fast, secure, and reliable websites using modern cloud
            platforms. A great website is only as good as its performance and
            availability. I use services like Azure and Vercel to ensure your
            site is live, optimized, and always ready for your users—no matter
            where they are.
          </div>
        </div>
      </div>
    </section>
  );
}
