import React from "react";
import HeroSection from "./HeroSection";
import HomeFeatures from "./HomeFeatures";
import WhyChoose from "./WhyChoose";
import { CarouselDemo } from "../CarouselDemo1";
import TopWave from "./TopWave";
import { WarpBackgroundDemo } from "../WarpBackgroundDemo";
import { AnimatedBeamDemo } from "../AnimatedBeamDemo";
import { InfiniteMovingCardsDemo } from "../InfiniteMovingCardsDemo";
function HomePage() {
  return (
    <div>
      <div className="md:bg-[#7B3F00]">
        <HeroSection />
        <div className="relative flex justify-center items-center px-8 md:px-12   text-black font-semibold max-w-3xl lg:max-w-5xl mx-auto lg:text-left text-xl lg:text-5xl 2xl:max-w-7xl 2xl:text-6xl bottom-8">
          <p className="  lg:bg-[#7B3F00]  border border-none text-amber-200 hidden  md:block">
            "With over 3+ years of a Vivasayi's trust, we move forward focusing
            on quality and reliability. Let us accompany you on this journey to
            success."
          </p>
        </div>
      </div>
      <div className="block lg:hidden ">
        <WarpBackgroundDemo />
      </div>
      <TopWave />
      <div className="padding">
        
        <InfiniteMovingCardsDemo />
      </div>

      {/* <AnimatedBeamDemo/> */}

      {/* <HomeFeatures /> */}
      {/* <WhyChoose /> */}
    </div>
  );
}

export default HomePage;
