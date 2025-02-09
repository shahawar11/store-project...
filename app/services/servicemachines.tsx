import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TypewriterEffectSmoothDemo } from './Typewriter';

const ImageCards = () => {
  const cards = [
    {
      image: "/machines/32-seed driller machine.webp",
      title: "Seed Drills",
      content: "Precision planting with our advanced seed drills. Ensure optimal seed placement and spacing for maximum yield.",
      points: [
        "Multiple row configurations",
        "Adjustable depth control",
         "Compatible with various seed types"
      ]},
   
    {
      image: "/Machines/34-sprayer .jpg",
      title: "Sprayers",
      content: "Efficient and precise application of fertilizers, pesticides, and herbicides with our modern sprayers.",
      points: [
        "Various tank capacities",
        "Adjustable spray patterns",
        "Easy-to-use control systems",
       ]},
    {
      image: "/machines/33-sprayers-parts.jpg",
      title: "Sprayer Parts",
      content: "Keep your sprayers in top condition with our wide range of high-quality replacement parts.",
      points: [
        "Nozzles and tips",
        "Pumps and valves",
        "Hoses and fittings",
       ]},
  ];

  return (
<section className='md:px-10 md:py-6 px-10'>
  <Card className='bg-yellow-50'>
  <div className='pb-6'>
  <div>
    <TypewriterEffectSmoothDemo/>
  </div>
  <div className="flex justify-center items-center p-4 flex-col md:flex-row space-y-32 md:space-y-0 md:space-x-6 lg:space-x-20 xl:space-x-40">
      {cards.map((card, index) => (
        <div key={index} className="relative w-64">
          {/* Image container that extends outside the card */}
          <div className="absolute -top-[100px] left-1/2 transform -translate-x-1/2 w-48 h-48 z-10 shadow-xl ">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover rounded- shadow-"
            />
          </div>
          
          <Card className="pt-28 pb-6 h-[400px] md:h-[500px] lg:h-[400px] rounded-t-md">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2 text-center underline">{card.title}</h3>
              <p className="text-gray-600 text-center ">{card.content}</p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
                {card.points.map((point, idx) => (
                  <li key={idx} className="text-left mt-4">{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  </div>
    </Card>
</section>
  );
};

export default ImageCards;