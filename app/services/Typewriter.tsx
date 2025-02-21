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
    // {
    //   text: "",
    // },
    // {
    //   text: "",
    //   className: "text-blue-950 dark:text-blue-600",

    // },
    
   
   
  ];
  return (
    <div className="flex flex-col justify-center h-[20rem]   items-start ml-4  lg:ml-10 xl:ml-30 mx-auto lg:mb-10">
  <p className="text-neutral-600 dark:text-neutral-200 text-md sm:text-lg ">
    Farm Smarter, Not Harder
  </p>
  <div>
    <TypewriterEffectSmooth words={words} />
  </div>
 
   
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div> */}
    </div>
  );
}
