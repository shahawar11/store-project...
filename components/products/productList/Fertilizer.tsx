import Image from "next/image"
 
export default function Fertilizer() {
  const cards = [
    {
      title: "YaraMila Fertilizer",
      description: "Premium-quality, balanced NPK fertilizer designed to optimize crop nutrition and maximize yields. Ensures healthy plant growth, improved soil fertility, and sustainable farming. Trusted by farmers for superior results.",
      category: "YaraMila ",
      image: "/Products/Fertilizer/21-yaraMila.jpg",
    },
    {
      title: "Triumph Fertlizer ",
      description: "High-efficiency NPK fertilizer tailored for enhanced crop growth and yield. Promotes nutrient-rich soil, robust plant development, and sustainable farming. A reliable choice for farmers aiming for optimal productivity.",
      category: "Triumph",
      image: "/Products/Fertilizer/22-triumph.png",
    },
    {
      title: "Bharat APS (SPIC)",
      description: " A trusted ammonium phosphate sulfate fertilizer, providing essential nutrients like nitrogen, phosphorus, and sulfur. Enhances soil fertility, promotes healthy crop growth, and boosts yields for sustainable agriculture.",
      category: "BHARAT-APS ",
      image: "/Products/Fertilizer/23-Bharat-APS.jpeg",
    },
    {
        title: " Bharat Urea (SPIC)",
        description: "High-quality nitrogen fertilizer ensuring optimal plant growth and higher crop yields. Known for its purity and efficiency, it supports healthy soil and sustainable farming practices. Trusted by farmers nationwide.",
        category: "BHARAT UREA",
        image: "/Products/Fertilizer/24-BHARAT UREA.jpeg",
      },
      {
        title: "Bharat DAP (SPIC)",
        description: "Premium diammonium phosphate fertilizer, delivering essential phosphorus and nitrogen for robust plant growth and high yields. Enhances soil fertility and supports sustainable farming. A reliable choice for farmers.",
        category: " BHARAT-DAP",
        image: "/Products/Fertilizer/25-BHARAT-DAP.jpeg",
      },
      {
        title: "Super Boost Plant Growth Liquid",
        description: "Advanced NPK formula designed to enhance crop growth, improve soil health, and maximize yields. Packed with essential nutrients, it ensures robust plant development and sustainable farming success ",
        category: " Super Boost",
        image: "/Products/Fertilizer/7-Super-Boost.jpg",
      },
     
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 md:p-6 md:px-10 md:mx-20 space-y-4   px-2">
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

