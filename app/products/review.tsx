"use client";

import { Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
interface ReviewBubble {
  id: number;
  rating: number;
  text: string;
}

export default function ReviewSummary() {
  const [bubbles, setBubbles] = useState<ReviewBubble[]>([]);

  // Generate random review bubbles
  useEffect(() => {
    const newBubbles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      rating: Math.floor(Math.random() * 6) + 2,
      text: "Review text content",
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="min-h-[300px] bg-gray-200 p-4 relative overflow-hidden bg-blur -mb- ">
      {/* Floating review bubbles */}
      {bubbles.map((bubble, i) => (
        <div
          key={bubble.id}
          className="absolute bg-white rounded-lg p-3 shadow-lg w-48 animate-float z-30"
          style={{
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-gray-200 rounded-full" />
            <div className="flex">
              {Array.from({ length: bubble.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded w-3/4" />
          <div className="h-2 bg-gray-200 rounded w-full mt-2" />
        </div>
      ))}

      {/* Main review card */}
      <section className="">
        <div className="flex items-center    p-4 mt-">
          <Card className="max-w-lg mx-auto relative z-40 bg-blue-950 text-white p-4 ">
            <CardHeader>
              <CardTitle>Our Business</CardTitle>
              <CardDescription>We're here to serve you</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="text-yellow-800">
                <MapPin className="mr- h-4 w-4 animate-bounce" />
                <Separator orientation="vertical"  className=""/>

                Locate Us
              </Button>
              <Button>
                <Phone className="mr- h-4 w-4 animate-pulse duration-1500" />
                <Separator orientation="vertical"  className=""/>

                Contact Now
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex w-1/2">
            {/* <div className="w-1/2"> 
                  <Image
                        src="/buffalo.jpg?height=100&width=1920"
                        alt="Hero background"
                        layout="fill"
                        objectFit="cover"
                   />
                     
            </div> */}
        </div>
      </section>
    </div>
  );
}
