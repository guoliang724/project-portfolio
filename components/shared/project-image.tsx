"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image, { StaticImageData } from "next/image";

gsap.registerPlugin(ScrollTrigger);

function ProjectImage({
  image,
  direction,
  slot,
}: {
  image: StaticImageData | StaticImageData[];
  direction: "left" | "right" | string;
  slot?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topLevelRef = useRef<HTMLImageElement>(null);
  const bottomLevelRef = useRef<HTMLImageElement>(null);

  const dotColor = direction === "left" ? "bg-white" : "bg-gray-500";
  const dots = new Array(120).fill(0);
  const dotsComponent = dots.map((_, index) => (
    <div key={index} className={`w-1 h-1 ${dotColor} rounded-full `} />
  ));

  useEffect(() => {
    if (!Array.isArray(image) || image.length != 4) return;
    const container = containerRef.current!;
    const cardsFlip = gsap.utils.toArray("[data-card-flip]");
    let lastFlipTime = 0;

    const flipCard = () => {
      const now = Date.now();
      if (now - lastFlipTime < 2000) return; // 节流
      lastFlipTime = now;

      const card = gsap.utils.random(cardsFlip)!;
      const type = gsap.utils.random(["vertical", "horizontal"]);

      const tl = gsap.timeline();

      if (type === "vertical") {
        tl.to(card, {
          rotateX: 180,
          duration: 0.8,
          ease: "power2.inOut",
        }).to(card, {
          rotateX: 0,
          duration: 0.8,
          ease: "power2.inOut",
        });
      } else {
        tl.to(card, {
          rotateY: 180,
          duration: 0.8,
          ease: "power2.inOut",
        }).to(card, {
          rotateY: 0,
          duration: 0.8,
          ease: "power2.inOut",
        });
      }
    };

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        if (self.direction !== 0) flipCard();
      },
    });

    return () => {
      trigger.kill();
    };
  }, [image]);

  useEffect(() => {
    if (!Array.isArray(image) || image.length != 2) return;

    const container = containerRef.current!;
    const top = topLevelRef.current!;
    const bottom = bottomLevelRef.current!;

    let isAnimating = false;

    const slideDown = () => {
      if (isAnimating) return;
      isAnimating = true;

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating = false;
        },
      });

      tl.to(top, { x: "-30", duration: 1, ease: "power3.inOut" })
        .to(bottom, { x: "35", duration: 1, ease: "power3.inOut" }, "<")
        .to(top, { x: "0%", duration: 1, ease: "power3.inOut", zIndex: 20 })
        .to(
          bottom,
          { x: "0%", duration: 1, ease: "power3.inOut", zIndex: 30 },
          "<"
        );
    };

    const slideUp = () => {
      if (isAnimating) return;

      isAnimating = true;

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating = false;
        },
      });

      tl.to(bottom, {
        x: "35",
        duration: 1,
        ease: "power3.inOut",
      })
        .to(top, { x: "-30", duration: 1, ease: "power3.inOut" }, "<")
        .to(bottom, {
          x: "0",
          duration: 1,
          ease: "power3.inOut",
          zIndex: 20,
        })
        .to(
          top,
          { x: "0", duration: 1, ease: "power3.inOut", zIndex: 30 },
          "<"
        );
    };

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const topLevelNow = gsap.getProperty(top, "z-index");
        const bottmLevelNow = gsap.getProperty(bottom, "z-index");
        const velocity = self.getVelocity();

        if (velocity > 10 && topLevelNow > bottmLevelNow) {
          slideDown();
        } else if (velocity < -10 && topLevelNow < bottmLevelNow) {
          slideUp();
        }
      },
    });

    return () => trigger.kill();
  }, [image]);

  const dotdirectionClass =
    direction === "left" ? "-left-3 -bottom-3" : "-right-3 -top-3";
  const directionClass = direction === "left" ? "order-1" : "-order-1";

  const singleComponent = !Array.isArray(image) && (
    <div
      className="relative mb-10 md:mb-0 w-2/3 h-2/3 md:w-auto md:h-auto"
      style={{ transformStyle: "preserve-3d" }}
    >
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

  const doubleComponent = !slot &&
    Array.isArray(image) &&
    image.length === 2 && (
      <div
        className="relative w-2/3 shadow-2xl mt-10 md:mt-0"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          className="shadow-lg z-30 absolute w-1/2 -top-18 md:-to-24 md:left-12 left-12"
          src={image[0]}
          width={500}
          height={500}
          alt="class pro"
          ref={topLevelRef}
        />
        <Image
          className="shadow-lg z-20 relative w-1/2 md:top-4 md:left-36 left-24"
          src={image[1]}
          width={500}
          height={500}
          alt="class pro"
          ref={bottomLevelRef}
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
    <div
      className="relative w-2/3 shadow-2xl"
      style={{ transformStyle: "preserve-3d" }}
    >
      <Image
        className="shadow-lg z-30 absolute w-1/2 md:top-32 md:left-2 top-13 left-0"
        src={image[0]}
        width={500}
        height={500}
        alt="class pro"
      />
      <Image
        className="shadow-lg z-20 relative w-1/2 md:top-0 md:left-32 top-0 left-16"
        src={image[1]}
        width={500}
        height={500}
        alt="class pro"
      />
      <Image
        className="shadow-lg z-40 relative w-1/2 md:top-4 md:left-52 top-0 left-24"
        src={image[2]}
        width={500}
        height={500}
        alt="class pro"
      />
      <div className="bg-sky-50  absolute z-10 top-0 left-0 w-full h-full"></div>
      <div
        className={`grid grid-cols-8 z-0 gap-1 absolute ${dotdirectionClass}`}
      >
        {dotsComponent}
      </div>
    </div>
  );

  const fourthComponent = Array.isArray(image) && image.length === 4 && (
    <div
      className="relative w-2/3 mx-auto shadow-2xl"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="bg-sky-50 absolute z-10 top-0 left-0 w-full h-full rounded-xl" />

      <div className="relative grid grid-cols-2 gap-6 z-20">
        <div className="relative flex justify-end">
          <div
            className="transform -rotate-4 -translate-x-6 -translate-y-4 z-30"
            data-card-flip
          >
            <Image
              className="shadow-lg rounded-xl"
              src={image[0]}
              width={280}
              height={280}
              alt="image1"
            />
          </div>
        </div>
        <div className="relative flex justify-start">
          <div
            className="transform rotate-3 translate-x-4 -translate-y-6 z-20"
            data-card-flip
          >
            <Image
              className="shadow-lg rounded-xl"
              src={image[1]}
              width={280}
              height={280}
              alt="image2"
            />
          </div>
        </div>

        <div className="relative flex justify-end">
          <div
            className="transform rotate-2 -translate-x-4 translate-y-2 z-40"
            data-card-flip
          >
            <Image
              className="shadow-lg rounded-xl"
              src={image[2]}
              width={280}
              height={280}
              alt="image3"
            />
          </div>
        </div>
        <div className="relative flex justify-start">
          <div
            className="transform -rotate-3 translate-x-2 translate-y-4 z-30"
            data-card-flip
          >
            <Image
              className="shadow-lg rounded-xl"
              src={image[3]}
              width={280}
              height={280}
              alt="image4"
            />
          </div>
        </div>
      </div>

      <div
        className={`grid grid-cols-8 z-0 gap-1 absolute ${dotdirectionClass}`}
      >
        {dotsComponent}
      </div>
    </div>
  );

  const flappyBirdComponent = Array.isArray(image) && slot && (
    <div className="relative rounded-xl">
      <div className="relative z-20  mx-auto border-slate-100  bg-slate-100 border-[8px] rounded-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
        <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
          <Image
            src={image[0]}
            width={278}
            height={156}
            className="h-[156px] md:h-[278px] w-full rounded-lg"
            alt=""
          />
        </div>
      </div>

      <div className="relative -top-10 left-4 md:left-10 z-30 mx-auto border-slate-100  bg-slate-100 border-[8px] rounded-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
        <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
          <Image
            src={image[1]}
            width={278}
            height={156}
            className="h-[156px] md:h-[278px] w-full rounded-lg"
            alt=""
          />
        </div>
      </div>
      <div
        className={`grid grid-cols-8 z-0 gap-1 absolute ${dotdirectionClass}`}
      >
        {dotsComponent}
      </div>
    </div>
  );

  return (
    <div
      className={`${directionClass} rounded-xs flex justify-center items-center relative`}
      style={{ perspective: 1000 }}
      ref={containerRef}
    >
      {singleComponent}
      {doubleComponent}
      {tripleComponent}
      {fourthComponent}
      {flappyBirdComponent}
    </div>
  );
}

export default ProjectImage;
