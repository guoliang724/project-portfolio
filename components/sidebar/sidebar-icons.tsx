"use client";

import { cn } from "@/lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  HomeIcon,
  UserRoundPenIcon,
  BriefcaseBusinessIcon,
  HandshakeIcon,
  ListCheckIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SidebarIcons = () => {
  const [hash, setHash] = useState("");
  const router = useRouter();

  const SiderBarIconsObj = [
    { href: "#section-home", icon: <HomeIcon />, name: "Home" },
    { href: "#section-about", icon: <UserRoundPenIcon />, name: "About Me" },
    { href: "#section-work", icon: <BriefcaseBusinessIcon />, name: "Work" },
    {
      href: "#section-task",
      icon: <ListCheckIcon />,
      name: "What I Do",
    },
    { href: "#section-contact", icon: <HandshakeIcon />, name: "Contact" },
  ];

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", updateHash);

    updateHash();

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);
  console.log("outsider hash", hash);

  const SideBarIcons = SiderBarIconsObj.map((icon, index) => {
    const isPathMatch = icon.href === hash;
    const classnames = cn(
      "w-8 h-8 rounded-full bg-transparent flex justify-center items-center",
      isPathMatch && "bg-[#B8CAF4] dark:bg-[#D1A9CD]",
      "transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#B8CAF4] dark:hover:bg-[#D1A9CD]"
    );
    return (
      <TooltipProvider key={index}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              onClick={() => {
                setHash(icon.href);
                router.push("/" + icon.href);
              }}
              className={classnames}
            >
              {icon.icon}
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{icon.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  });

  return (
    <div className="flex flex-col justify-start items-center gap-4 sticky top-44">
      {SideBarIcons}
    </div>
  );
};

export default SidebarIcons;
