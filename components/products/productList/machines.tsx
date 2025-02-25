import Image from "next/image"
 
export default function Machines() {
  const cards = [
    {
      title: "Seed Driller Machine ",
      description: "Precision farming equipment designed for efficient seed sowing, ensuring uniform spacing and optimal depth. Enhances crop yield, saves time, and reduces labor costs. Ideal for modern, sustainable agriculture.",
      category: "Seed Driller",
      image: "/Products/Machines/32-seed driller machine.webp",
    },
    {
      title: "Sprayer-parts ",
      description: "High-quality components for agricultural sprayers, including nozzles, pumps, hoses, and tanks. Ensures efficient pesticide and fertilizer application, enhancing crop protection and productivity. Reliable and durable for seamless farming operations",
      category: "Sprayer",
      image: "/Products/Machines/33-sprayers-parts.jpg",
    },
    {
      title: "Sprayer Machine",
      description: "Essential agricultural equipment for precise and efficient application of pesticides, herbicides, and fertilizers. Enhances crop protection, saves time, and ensures uniform coverage. Ideal for modern, high-yield farming practices. ",
      category: " Sprayer",
      image: "/Products/Machines/34-sprayer .jpg",
    },
   
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 md:p-6 md:px-10 md:mx-20 space-y-4   px-2">
      {cards.map((card, index) => (
        <section
          key={index}
          className="group md:block p-6 bg-green-100 rounded-xl transition-all duration-300 hover:shadow-lg mt-4 cursor-pointer "
        >
          <div className="flex flex-row md:block">
          <div className="relative w-full h-full lg:h-80 md:mb-6 overflow-hidden rounded-lg  ">
            <Image
              src={card.image || "/placeholder.svg"}
              alt={card.title}
              width={400}
              height={400}
              className="object-cover p-2 md:p-8 transition-transform duration-300 group-hover:scale-110 bg-white "
            />
          </div>
        <div className=" mt-2 ml-2 md:mt-0 md:ml-0">
        <span className="md:inline-block px-4 py-1.5 mb-4 text-sm font-medium text-gray-800 bg-yellow-100 rounded-full ">
            {card.category}
          </span>
          <h3 className="mb-3 text-2xl font-semibold text-blue-950">{card.title}</h3>
          <p className="mb-4 text-gray-600  ">{card.description}</p>
       
        </div>
          </div>
        </section>
      ))}
    </div>
  )
}

