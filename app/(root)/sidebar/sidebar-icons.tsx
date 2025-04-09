"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
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
  MessageCircleHeartIcon,
  HandshakeIcon,
  FileUserIcon,
} from "lucide-react";

const SiderBarIconsObj = [
    { href: "Home", icon: <HomeIcon /> },
    { href: "AboutME", icon: <UserRoundPenIcon /> },
    { href: "Resume", icon: <FileUserIcon /> },
    { href: "Work", icon: <BriefcaseBusinessIcon /> },
    { href: "Testimonial", icon: <MessageCircleHeartIcon /> },
    { href: "Contact", icon: <HandshakeIcon /> },
  ];

const SidebarIcons = () => {
  const pathName = usePathname();


  const SideBarIcons = SiderBarIconsObj.map((icon, index) => {
    const isPathMatch = icon.href.toLowerCase() === pathName.split("/")[1];
    const classnames = cn(
      "w-8 h-8 rounded-full bg-transparent flex justify-center items-center",
      isPathMatch && "bg-[#B8CAF4] dark:bg-[#D1A9CD]",
      "transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#B8CAF4] dark:hover:bg-[#D1A9CD]"
    );
    return (
      <TooltipProvider key={index}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={"/" + icon.href.toLowerCase()} className={classnames}>
              {icon.icon}
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{icon.href}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  });

  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      {SideBarIcons}
    </div>
  );
};

export default SidebarIcons;
