"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface SeemyworkProps {
  link: string;
  text:string
}
function Seemywork({ link,text }: SeemyworkProps) {
  const router = useRouter();
  const handleClickMyWork = () => {
    router.push(link);
  };
  return (
    <div className="relative">
      <Button
        onClick={handleClickMyWork}
        className="text-[12px] md:text-[12px] cursor-pointer z-10 w-30 rounded-none flex justify-center items-center bg-gray-800 dark:bg-white shadow-md "
      >
        {text}
      </Button>
      <div className="absolute left-[5px] top-2 border-2  border-gray-800 w-30 h-8 z-0 dark:border-white pointer-events-none"></div>
    </div>
  );
}

export default Seemywork;
