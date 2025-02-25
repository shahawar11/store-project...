"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Top-Quality",
    },
    {   

      text: "Rental",
    },
    {
      text: "Machines,",
    },
    {
      text: "with",
    },
    {
      text: "Hassle-Free!",
      className: "text-blue-950 dark:text-blue-600",

    },
  
  ];
  return (
    <div className="flex flex-col justify-center h-[20rem]   items-start ml-4  lg:ml-10 xl:ml-30 mx-auto lg:mb-10">
  <p className="text-neutral-600 dark:text-neutral-200 text-md sm:text-lg ">
    Farm Smarter, Not Harder
  </p>
  <div>
    <TypewriterEffectSmooth words={words} />
  </div>
  
    </div>
  );
}
