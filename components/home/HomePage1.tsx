import React from 'react'
import HeroSection from './HeroSection'
import HomeFeatures from './HomeFeatures';
 import WhyChoose from './WhyChoose';

function HomePage() {
  return (
    <div>
      <div className="lg:bg-[#7B3F00] ">
        <HeroSection />
        <div className="relative  padding text-black font-semibold max-w-2xl lg:max-w-5xl mx-auto lg:text-left text-xl lg:text-4xl bottom-24">
          <p className="p-6  bg-gray-100 lg:bg-[#7B3F00]  border lg:border-none rounded-br-full rounded-tl-full lg:rounded-tl-none lg:rounded-br-3xl lg:rounded-tr-3xl lg:text-amber-200">
            "With over 3+ years of a Vivasayi's trust, we move forward focusing
            on quality and reliability. Let us accompany you on this journey to
            success."
          </p>
        </div>
      </div>

      <HomeFeatures />
      <WhyChoose />
    </div>
  );
}

export default HomePage
