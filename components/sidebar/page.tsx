import Image from "next/image";
import LeonLogo from "@/assets/leonlogo.png";

import ToggleButton from "./toggle-button";
import SidebarIcons from "./sidebar-icons";

export default function SideBar() {
  return (
    <div className="md:flex flex-col justify-start gap-30 w-20 hidden">
      <div className="flex justify-center items-center w-full sticky top-4">
        <Image
          src={LeonLogo}
          className=""
          alt="Leon Logo"
          width={400}
          height={400}
        />
      </div>
      <SidebarIcons />
      <div className="flex justify-center items-center sticky top-6/7">
        <ToggleButton />
      </div>
    </div>
  );
}

// #D1A9CD  #B8CAF4
