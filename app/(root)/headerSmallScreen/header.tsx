import React from "react";
import Image from "next/image";
import LeonLogo from "@/assets/leonlogo.png";
import ToggleButton from "../sidebar/toggle-button";

import DrawerIcons from "./drawer-icons";

function HeaderSmallScreen() {
  return (
    <div className="w-full flex flex-row justify-around items-center md:hidden">
      <Image
        src={LeonLogo}
        className="inline-block"
        alt="Leon Logo"
        width={200}
        height={50}
      />
      <DrawerIcons />
      <ToggleButton />
    </div>
  );
}

export default HeaderSmallScreen;
