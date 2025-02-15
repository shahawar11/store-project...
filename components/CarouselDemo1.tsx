import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel1";

export function CarouselDemo1() {
  return (
    <Carousel className="w-full max-w-xs lg:max-w-md">
      <CarouselContent>
        {[
          { src: "/pesticide.jpg", title: "Pesticides" },
          { src: "/seeds.jpg", title: "Seeds" },
          { src: "/fertilizer1.jpg", title: "Fertilizer" },
          { src: "/manualseed.jpg", title: "Machinery" },
          { src: "/herbicide.jpg", title: "Herbicides" },
          { src: "/manure.jpg", title: "Soil Test" },
          { src: "/water4.jpg", title: "Water Test" },
        ].map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-0 rounded-md">
                  <div className="relative w-full aspect-square">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3 rounded-b-md">
                      <h1 className="text-center text-white text-lg font-semibold">
                        {item.title}
                      </h1>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselDemo1;
