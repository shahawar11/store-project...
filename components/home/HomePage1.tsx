import React from "react";
import HeroSection from "./HeroSection";
import TopWave from "./TopWave";
// import { WarpBackgroundDemo } from "../WarpBackgroundDemo";
 import { MarqueeDemo } from "./MarqueeDemo";
import FeaturesHome from "./featureHome";
import FeaturesHome2 from "./featureHome2";
   function HomePage() {
  return (
    <div>
      <div className="md:bg-[#7B3F00]">
        <HeroSection />
        <div className="relative flex justify-center items-center px-8 md:px-12 text-black font-semibold max-w-3xl lg:max-w-5xl mx-auto lg:text-left text-xl lg:text-5xl 2xl:max-w-7xl 2xl:text-6xl bottom-8">
  <p className="lg:bg-[#7B3F00] border border-none text-amber-200 hidden md:block">
    &quot;With over 3+ years of a Vivasayi&apos;s trust, we move forward focusing
    on quality and reliability. Let us accompany you on this journey to
    success.&quot;
  </p>
</div>

      </div>
      <div className="block md:hidden ">
        {/* <WarpBackgroundDemo /> */}
      </div>
      <TopWave />
      <FeaturesHome/>
      <FeaturesHome2/>
      <div className="padding">
        
         <MarqueeDemo/>
      </div>
</div>
  );
}

export default HomePage;
