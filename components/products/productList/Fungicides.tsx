import Image from "next/image"
import Link from "next/link"

export default function Fungicides() {
  const cards = [
    {
      title: "SAAF Fungicide",
      description: "SAAF Fungicide: Broad-spectrum, systemic fungicide for disease control in crops. Effective against fungal pathogens, ensuring healthy plant growth and high yields.",
      category: "SAAF ",
      image: "/Products/Fungicides/26-SAAF Fungicide.jpg",
    },
    {
      title: "Nativo Fungicide",
      description: "Dual-mode action, systemic fungicide for broad-spectrum disease control. Protects crops like fruits, vegetables, and cereals from fungal infections, enhancing yield and quality.",
      category: "Nativo",
      image: "/Products/Fungicides/27-Nativo Fungicide.webp",
    },
    {
      title: "Aliette Fungicide",
      description: "Systemic fungicide for controlling soil and foliar diseases in various crops. Provides long-lasting protection against Oomycetes, such as Phytophthora and Pythium, promoting healthy plant growth.",
      category: "Aliette",
      image: "/Products/Fungicides/28-aliette.webp",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 md:p-6 md:px-10 md:mx-20 space-y-4 lg:space-y-0  px-2">
      {cards.map((card, index) => (
        <section
          key={index}
          className="group md:block p-6 bg-green-100 rounded-xl transition-all duration-300 hover:shadow-lg cursor-pointer "
        >
          <div className="flex flex-row md:block">
          <div className="relative w-full h-full lg:h-80 md:mb-6 overflow-hidden rounded-lg  ">
            <Image
              src={card.image || "/placeholder.svg"}
              alt={card.title}
              width={400}
              height={400}
              className="object-cover p-2 md:p-8 transition-transform duration-300 group-hover:scale-110 bg-white"
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

