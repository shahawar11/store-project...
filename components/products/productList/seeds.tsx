import Image from "next/image"
 
export default function Seeds() {
  const cards = [
    {
      title: "4343 Hybrid Maize Seeds ",
      description: "High-yielding, disease-resistant seeds designed for optimal growth and productivity. Ideal for diverse climates, ensuring robust crops and superior grain quality. A farmer’s choice for reliable and profitable harvests. ",
      category: "VNR",
      image: "/Products/Seeds/13-corn seeds.jpg",
    },
    {
      title: "MONEY MAKER COTTON (KCH-100 BG II) ",
      description: " High-yielding, genetically advanced cotton seeds with built-in pest resistance (BG II). Ensures superior fiber quality, higher productivity, and reduced pesticide use. Ideal for maximizing profits in cotton farming.",
      category: "Kaveri",
      image: "/Products/Seeds/14-cotton seeds.jpg",
    },
    {
      title: "US 4708 cotton seeds",
      description: " High-performing hybrid seeds known for excellent yield potential and superior fiber quality. Designed for adaptability across diverse conditions, ensuring robust growth and profitable returns for cotton farmers.",
      category: "US",
      image: "/Products/Seeds/15-us-4708 cotton seeds.jpg",
    },
    {
      title: "Rasi 659 Cotton Seeds ",
      description: "High-yielding hybrid seeds with excellent pest resistance and adaptability. Known for superior fiber quality and consistent performance, ensuring profitable and sustainable cotton farming for growers. ",
      category: "Rasi  ",
      image: "/Products/Seeds/16-Rasi cotton seeds.jpeg",
    },
    {
        title: " MRM 4060 Hybrid Maize Seeds",
        description: "High-yielding, disease-resistant seeds designed for optimal growth and productivity. Ideal for diverse climates, ensuring robust crops and superior grain quality. A farmer’s choice for reliable and profitable harvests.",
        category: "Mahyco ",
        image: "/Products/Seeds/17-mrm 4060 maize seeds.avif",
      },
      {
        title: " 5106 Hybrid Maize Seeds",
        description: "High-performance seeds offering excellent yield potential and strong disease resistance. Adaptable to various climates, ensuring robust growth and superior grain quality for profitable maize farming ",
        category: "HYTECH",
        image: "/Products/Seeds/18-HYTECH 5106 Corn seeds.png",
      },
      
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 md:p-6 md:px-10 md:mx-20 space-y-4   px-2">
      {cards.map((card, index) => (
        <section  
           key={index}
          className="group md:block p-6 bg-green-100 rounded-xl transition-all duration-300 hover:shadow-lg mt-4 hover:cursor-pointer"
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

