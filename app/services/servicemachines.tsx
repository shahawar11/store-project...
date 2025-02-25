import { Card, CardContent } from "@/components/ui/card"
import { TypewriterEffectSmoothDemo } from "./Typewriter"
import Image from 'next/image'

const ImageCards = () => {
  const cards = [
    {
      image: "/machines/32-seed driller machine.webp",
      title: "Seed Drills",
      content:
        "Precision planting with our advanced seed drills. Ensure optimal seed placement and spacing for maximum yield.",
      points: ["Multiple row configurations", "Adjustable depth control", "Compatible with various seed types"],
    },
    {
      image: "/Machines/34-sprayer .jpg",
      title: "Sprayers",
      content: "Efficient and precise application of fertilizers, pesticides, and herbicides with our modern sprayers.",
      points: ["Various tank capacities", "Adjustable spray patterns", "Easy-to-use control systems"],
    },
    {
      image: "/machines/33-sprayers-parts.jpg",
      title: "Sprayer Parts",
      content: "Keep your sprayers in top condition with our wide range of high-quality replacement parts.",
      points: ["Nozzles and tips", "Pumps and valves", "Hoses and fittings"],
    },
  ]

  return (
    <section className="bg-yellow-50">
      <div className="pb-6">
        <div>
          <TypewriterEffectSmoothDemo />
        </div>
        <div className="flex justify-center items-center p-4 flex-col md:flex-row space-y-32 md:space-y-0 md:space-x-6 lg:space-x-20 xl:space-x-40">
          {cards.map((card, index) => (
            <div key={index} className="relative w-64 flex flex-col">
              {/* Image container that extends outside the card */}
              <div className="absolute -top-[100px] left-1/2 transform -translate-x-1/2 w-48 h-48 z-10 hover:shadow-2xl duration-300">
                <Image
                width={400}
                height={400}
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-md shadow-md"
                />
              </div>

              <Card className="flex-grow pt-28 pb-6 rounded-t-md flex flex-col border border-green-300 shadow-xl">
                <CardContent className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2 text-center underline text-blue-950">{card.title}</h3>
                  <p className="text-gray-500 text-center font-thin mb-4">{card.content}</p>
                  <ul className="list-disc pl-6 space-y-2 text-sm text-green-900 mt-auto font-serif">
                    {card.points.map((point, idx) => (
                      <li key={idx} className="text-left">
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageCards

