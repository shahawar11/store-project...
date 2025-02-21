import Image from "next/image"
import Link from "next/link"

export default function Herbicides() {
  const cards = [
    {
      title: " Glycel Herbicide",
      description: "Broad-spectrum, systemic weed control for crops and non-crop areas. Fast-acting, long-lasting residual effect. Effective against grasses and weeds.",
      category: "Glycel",
      image: "/Products/Herbicides/1-glycel.png",
    },
    {
      title: " Roundup Herbicide",
      description: "Glyphosate-based, non-selective weed killer. Fast-acting, systemic control for weeds and grasses in crops, lawns, and non-crop areas.",
      category: "Roundup",
      image: "/Products/Herbicides/2-Roundup Herbicide.png",
    },
    {
      title: "Laudis Herbicide ",
      description: "Post-emergent, corn-specific weed control. Effective against tough grasses and broadleaf weeds, enhancing crop yield and flexibility.",
      category: "Laudis",
      image: "/Products/Herbicides/3-laudis herbicide.webp",
    },
    {
      title: "Kapiq Herbicide ",
      description: "Pre-emergent, residual weed control for turf and ornamental areas. Targets broadleaf weeds and grasses, providing long-lasting protection.",
      category: "Kapiq",
      image: "/Products/Herbicides/20-kapiq.webp",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 xl:gap-x-10  md:p-6 md:px-10   space-y-4   px-2">
      {cards.map((card, index) => (
        <section
          key={index}
          className="group md:block p-6 bg-green-100 rounded-xl transition-all duration-300 hover:shadow-lg mt-4 cursor-pointer"
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
        <span className="md:inline-block px-4 py-1.5 mb-2 text-sm font-medium text-gray-800 bg-yellow-100 rounded-full ">
            {card.category}
          </span>
          <h3 className="mb-3 py-4  text-2xl font-semibold text-blue-950">{card.title}</h3>
          <p className="mb-4 text-gray-600  ">{card.description}</p>
       
        </div>
          </div>
        </section>
      ))}
    </div>
  )
}

