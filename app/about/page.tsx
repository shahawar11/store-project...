<<<<<<< HEAD
import ShopMap from '@/components/shopMap';
import React from 'react'

function AboutPage() {
  return <div className='w-1/2'> 
     <h1 className="text-2xl font-bold mb-4">Find Our Shop</h1>
     <ShopMap />
  </div>;
}

export default AboutPage
 
 
=======
import React from "react";
import {
  Sprout,
  Users,
  Shield,
  Trophy,
  Leaf,
  Star,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";
import { NumberTickerDemo } from "@/components/NumberTickerDemo";
import { Card, CardContent } from "@/components/ui/card";
import ShopMap from "@/components/ShopMap";

const AboutPage = () => {
  const stats = [
    { number: "3+", label: "Years of Excellence" },
    { number: "1000+", label: "Happy Farmers" },
    { number: "95%", label: "Customer Satisfaction" },
    { number: "500+", label: "Products" },
  ];

  return (
    <div className="min-h-screen padding bg-white">
      {/* Hero Section with Diagonal Design */}

      {/* Our Story Section */}
      <section className=" py-20">
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="grid md:grid-cols-2 gap-16 items-center ">
            <div className="space-y-6 ">
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Growing Together with Our Farming Community
              </h2>
              <p className="text-xl text-gray-600">
                At{" "}
                <span className="text-green-600 font-semibold">Vivasayi</span> ,
                we understand that modern farming requires both traditional
                wisdom and innovative solutions. Our journey began with a simple
                mission: to empower farmers with quality products and expert
                guidance.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <Leaf className="text-green-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Quality First
                    </h3>
                    <p className="text-gray-600">
                      Premium agricultural products
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="text-green-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Team</h3>
                    <p className="text-gray-600">Dedicated support staff</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className=" max-w-sm bg-emerald-50  flex flex-col items-center justify-center space-y-2 border px-2 py-2 aspect-auto">
              <CardContent className="flex gap-2">
                <NumberTickerDemo />
                <span className="mx-auto flex items-center justify-center font-bold text-8xl text-green-800">
                  {" "}
                  +
                </span>
              </CardContent>
              <CardContent className="font-bold text-3xl text-black">
                Trusted Customers
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section with Overlapping Cards */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Agricultural Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to maximize your farm's potential
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sprout,
                title: "Fertilizers",
                description:
                  "Premium quality fertilizers for optimal crop nutrition",
                color: "bg-emerald-50",
                iconColor: "text-emerald-600",
              },
              {
                icon: Shield,
                title: "Crop Protection",
                description: "Effective pesticides and protection solutions",
                color: "bg-emerald-50",
                iconColor: "text-emerald-600",
              },
              {
                icon: Users,
                title: "Farm Equipment",
                description: "Modern machinery for efficient farming",
                color: "bg-emerald-50",
                iconColor: "text-emerald-600",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`${service.color} p-8 rounded-xl transform hover:-translate-y-2 transition-all hover:shadow-xl`}
              >
                <service.icon
                  className={`${service.iconColor} mb-6`}
                  size={40}
                />
                <h3 className="text-2xl font-semibold mb-4 text-green-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

      {/* Map Section */}
      <div className="">
        <h1 className=" text-2xl  md:text-5xl 2xl:text-5xl font-bold mx-auto text-center">
          Locate Us
        </h1>
        <ShopMap />
      </div>
      <div></div>
    </div>
  );
};

export default AboutPage;
>>>>>>> origin/shahPracticeOne
