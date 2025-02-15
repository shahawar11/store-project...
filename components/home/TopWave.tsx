import React from "react";
import CarouselDemo1, { CarouselDemo } from "../CarouselDemo1";
import { Carousel } from "../ui/Carousel1";

function TopWave() {
  return (
    <div>
      <div className="relative w-full overflow-hidden bg-white ">
        {/* wave top xl */}
        <div className="wavetopxl hidden 2xl:block top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-[calc(157%+1.3px)] h-96 z-35"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              className="fill-[#7B3F00]"
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            ></path>
          </svg>
        </div>
        {/* wave top md */}
        <div className="wavetopmd hidden lg:block top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-[calc(157%+1.3px)] h-96 z-35"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              className="fill-[#7B3F00]"
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            ></path>
          </svg>
        </div>
        {/* wave top sm */}
        {/* <div className="wavetopsm lg:hidden top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-[calc(157%+1.3px)] h-96 z-35"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              className="fill-[#7B3F00]"
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            ></path>
          </svg>
        </div> */}
        <div className="md:mt-40 2xl:mt-60">
          <div className="flex flex-col md:grid md:grid-cols-2 padding items-center justify-between mx-auto pt-16 space-y-16 ">
            <div className=" flex flex-col padding space-y-2 lg:space-y-4 2xl:space-y-8 justify-center items-center  text-center lg:text-left 2xl:text-left ">
              <h1 className=" text-2xl  md:text-5xl 2xl:text-5xl font-bold ">
                Our Expertise
              </h1>
              <p className="text-md lg:text-lg lg:max-w-lg 2xl:text-xl 2xl:max-w-xl bg-bannerImg1 bg-no-repeat bg-cover bg-center">
                We offer a comprehensive selection of agricultural products and
                services designed to support farmers and gardeners in achieving
                optimal crop growth. Our range includes{" "}
                <span className="font-semibold">
                  high-quality fertilizers, pesticides, herbicides, and premium
                  plant seeds, along with advanced agricultural machinery
                </span>{" "}
                to enhance efficiency. Additionally, we provide expert soil and
                water testing services to help ensure the best possible growing
                conditions, empowering you with data-driven insights for
                healthier and more productive farming.
              </p>
            </div>
            <div className="flex justify-center items-center w-full">
              <CarouselDemo1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopWave;
