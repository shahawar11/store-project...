import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function HeroSection() {
  const cards = [
    { title: "Card 1", imagePath: "/fertilizer.jpg" },
    { title: "Card 2", imagePath: "/manure.jpg" },
    { title: "Card 3", imagePath: "/seeds.jpg" },
  ]

  return (
    <section className="container mx-auto px-4 py-12 pt-32">
      <div className="grid  grid-cols-3 gap-6 lg:gap-x- lg:px-20 mb-12">
        {cards.map((card, index) => (
         <Card key={index} className="overflow-hidden aspect-square w-full h-full rounded-md ring-1 ring-yellow-400">
         <CardContent className="p-0 w-full h-full  ">
           <Image
             src={card.imagePath || "/placeholder.svg"}
             alt={`Image for ${card.title}`}
             width={400}
             height={400}
             className="w-full h-full object-cover "
           />
         </CardContent>
       </Card>
       
        ))}
      </div>
      <div className="w-full  p-8 rounded-lg shadow-lg bg-green-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-950 text-center mb-4 animate-fade-in-down">Discover Our Vision</h2>
          <p className="text-lg text-blue-800  text-center leading-relaxed animate-fade-in-up">
          Our vision is to transform agriculture with sustainable practices, high-quality products, and innovative solutions. We aim to empower farmers, enhance productivity, 
          and promote eco-friendly farming for a thriving, prosperous future.</p>
        </div>
      </div>
    </section>
  )
}

