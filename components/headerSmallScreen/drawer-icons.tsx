import React from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
  DrawerDescription,
} from "@/components/ui/drawer";
import {
  HomeIcon,
  UserRoundPenIcon,
  BriefcaseBusinessIcon,
  MessageCircleHeartIcon,
  HandshakeIcon,
  FileUserIcon,
} from "lucide-react";
import Link from "next/link";

import sonPic from "@/assets/son.jpg";

const SiderBarIconsObj = [
  { href: "#section-home", icon: <HomeIcon size={25} />, name: "Home" },
  {
    href: "#section-about",
    icon: <UserRoundPenIcon size={25} />,
    name: "About Me",
  },
  { href: "#section-resume", icon: <FileUserIcon size={25} />, name: "Resume" },
  {
    href: "#section-work",
    icon: <BriefcaseBusinessIcon size={25} />,
    name: "Work",
  },
  {
    href: "#section-testimonial",
    icon: <MessageCircleHeartIcon size={25} />,
    name: "Testimonial",
  },
  {
    href: "#section-contact",
    icon: <HandshakeIcon size={25} />,
    name: "Contact",
  },
];
function DrawerIcons() {
  return (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-1/3 max-w-sm my-auto">
        <DrawerHeader>
          <DrawerTitle className="flex justify-center">
            Welcome to Leon&apos;s Portfolio
          </DrawerTitle>
          <DrawerDescription>
            <div className="flex justify-center items-center mt-5">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={sonPic}
                alt="father and son"
                width={200}
                height={200}
              />
            </div>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex flex-row justify-between items-center">
          {SiderBarIconsObj.map((item, index) => (
            <DrawerClose asChild key={index}>
              <Link key={index} href={item.href}>
                <span>{item.icon}</span>
              </Link>
            </DrawerClose>
          ))}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerIcons;
