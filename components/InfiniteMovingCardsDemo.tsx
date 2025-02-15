"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Card } from "./ui/card";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="padding rounded-md flex flex-col space-y-2 lg:space-y-4 2xl:space-y-8 antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className=" text-2xl  md:text-5xl 2xl:text-5xl font-bold ">
        What Our Customers Say
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I needed high-quality fertilizers for my farm, and Vivasayi made it easy to find the right products.",
    name: "Anand Kumar",
    title: "⭐⭐⭐",
  },
  {
    quote:
      "Got quality seeds for my farm. Their team was helpful, but response time could be quicker.",
    name: "Thamizharasan",
    title: "⭐⭐⭐",
  },
  {
    quote:
      "Contacted Vivasayi for pesticides, got good recommendations and fair pricing. Will use again.",
    name: "Golkulnath",
    title: "⭐⭐⭐⭐",
  },
  {
    quote:
      "The herbicides worked well, and the price was reasonable. Happy with the purchase.",
    name: "Kavin Dharshan",
    title: "⭐⭐⭐⭐",
  },
  {
    quote:
      "Bought fertilizers, and the quality was excellent. Helped improve my crop yield.",
    name: "Rajasekar S",
    title: "⭐⭐⭐⭐⭐",
  },
];
