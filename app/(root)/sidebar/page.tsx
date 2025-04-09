import Image from "next/image";
import LeonLogo from "@/assets/leonlogo.png";

import ToggleButton from "./toggle-button";
import SidebarIcons from "./sidebar-icons";

export default function SideBar() {
  return (
    <div className="hidden md:flex flex-col justify-between w-20">
      <div className="flex justify-center items-center w-full">
        <Image
          src={LeonLogo}
          className="inline"
          alt="Leon Logo"
          width={400}
          height={400}
        />
      </div>
      <SidebarIcons />
      <div className="flex justify-center items-center">
        <ToggleButton />
      </div>
    </div>
  );
}

// #D1A9CD  #B8CAF4
