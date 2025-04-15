import React from "react";
import Image, { StaticImageData } from "next/image";

function ProjectImage({
  image,
  direction,
}: {
  image: StaticImageData | StaticImageData[];
  direction: "left" | "right" | string;
}) {
  const dotColor = direction === "left" ? "bg-white" : "bg-gray-500";
  const dots = new Array(120).fill(0);
  const dotsComponent = dots.map((_, index) => (
    <div key={index} className={`w-1 h-1 ${dotColor} rounded-full `} />
  ));

  const dotdirectionClass =
    direction === "left" ? "-left-3 -bottom-3" : "-right-3 -top-3";
  const directionClass = direction === "left" ? "order-1" : "-order-1";

  const singleComponent = !Array.isArray(image) && (
    <div className="relative">
      <Image
        className="shadow-2xs z-10 relative"
        src={image}
        width={500}
        height={500}
        alt="class pro"
      />
      <div
        className={`grid grid-cols-8 z-0 gap-1 absolute ${dotdirectionClass}`}
      >
        {dotsComponent}
      </div>
    </div>
  );

  const doubleComponent = Array.isArray(image) && image.length === 2 && (
    <div className="relative w-2/3 shadow-2xl">
      <Image
        className="shadow-lg z-30 absolute w-1/2 -top-24 left-2"
        src={image[0]}
        width={500}
        height={500}
        alt="class pro"
      />
      <Image
        className="shadow-lg z-20 relative w-1/2 top-4 left-36"
        src={image[1]}
        width={500}
        height={500}
        alt="class pro"
      />
      <div className="bg-[#F9EFE6] absolute z-10 top-0 left-0 w-full h-full"></div>
      <div
        className={`grid grid-cols-8 z-0 gap-1 absolute ${dotdirectionClass}`}
      >
        {dotsComponent}
      </div>
    </div>
  );

  const tripleComponent = Array.isArray(image) && image.length === 3 && (
    <div className="relative w-2/3 shadow-2xl">
    <Image
      className="shadow-lg z-30 absolute w-1/2 top-32 left-2"
      src={image[0]}
      width={500}
      height={500}
      alt="class pro"
    />
    <Image
      className="shadow-lg z-20 relative w-1/2 top-0 left-32"
      src={image[1]}
      width={500}
      height={500}
      alt="class pro"
    />
    <Image
      className="shadow-lg z-40 relative w-1/2 top-4 left-52"
      src={image[2]}
      width={500}
      height={500}
      alt="class pro"
    />
    <div className="bg-[#F9EFE6] absolute z-10 top-0 left-0 w-full h-full"></div>
    <div
      className={`grid grid-cols-8 z-0 gap-1 absolute ${dotdirectionClass}`}
    >
      {dotsComponent}
    </div>
  </div>
  )

  return (
    <div
      className={`${directionClass} rounded-xs flex justify-center items-center relative`}
    >
      {singleComponent}
      {doubleComponent}
      {tripleComponent}
    </div>
  );
}

export default ProjectImage;
