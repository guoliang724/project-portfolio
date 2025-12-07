import SkillSet from "./skillset";
import TechStack from "./techstack";

export default function About() {
  return (
    <section
      id="section-about"
      className="w-full min-h-[90vh] flex flex-col md:flex-row gap-5 justify-center items-center px-2 md:px-0"
    >
      <div className="flex flex-col gap-10 items-start justify-between md:w-1/3">
        <SkillSet />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center gap-4">
        <div className="w-full grid grid-cols-3 gap-1 items-center">
          <div className="w-full h-[1px] border-t-2 border-gray-400 border-dotted" />
          <div className="text-center text-base md:text-xl tracking-wider font-bold font-abril">
            Tech Stacks
          </div>
          <div className="w-full h-[1px] border-t-2 border-gray-400 border-dotted" />
        </div>
        <TechStack />
      </div>
    </section>
  );
}

// #F0EADC
// #DDE2E8 dark
