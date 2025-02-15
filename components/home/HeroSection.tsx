import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="mx-auto pt-24">
      <section className="relative h-screen bg-bannerImg bg-no-repeat bg-cover  bg-black z-20 bottom-24">
        <div className="absolute text-white padding lg:max-w-7xl 2xl:max-w-7xl z-40">
          <div className="flex flex-col space-y-2 items-center lg:items-start justify-center mt-40 lg:mt-40 2xl:mt-80">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tighter">
              Welcome Vivasayi,
            </h2>
            <h1 className="text-4xl lg:text-6xl text-primary text-center lg:text-left font-bold pt-2 tracking-tighter leading-tight">
              Harvest Success with Us!
            </h1>
            <p className="max-w-sm lg:max-w-xl text-sm lg:text-base font-semibold text-primary text-center lg:text-left pb-2">
              Premium agricultural products and machinery to take your farm to
              next level.
            </p>
            <button
              className="flex text-black justify-center items-center w-full sm:w-max px-6 h-12 rounded outline-none relative overflow-hidden border-[#29abe2] duration-300 ease-linear 
                after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-primary hover:after:opacity-100 hover:after:scale-[2.5] bg-white bg-opacity-100 border-transparent hover:border-[#172554]"
            >
              <span className="relative z-[5]">
                <Link href="/products">Our Products</Link>
              </span>
            </button>
          </div>
        </div>
        <div className="absolute h-screen w-full flex items-end bg-blackOverlay z-30"></div>
        {/* Mobile wave */}
        {/* <div className="custom-shape-divider-bottom-1738938424 md:hidden">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-[#7b3f00]"
            ></path>
          </svg>
        </div> */}
       
        {/* Wave section md */}
        <div className="wavemd hidden lg:block ">
          <div className="custom-shape-divider-top-1738767238">
            <svg
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-[#7b3f00]"
              ></path>
            </svg>
          </div>
        </div>

<<<<<<< HEAD
        {/* Wave Section */}
        <div className="wave hidden lg:block  ">
=======
        {/* Wave Section xl */}
        <div className="wavexl hidden 2xl:block">
>>>>>>> origin/shahPracticeOne
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
           >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
