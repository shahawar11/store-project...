import Image from "next/image"
 
export default function Insecticides() {
  const cards = [
    {
      title: "Solomon Insecticide",
      description: "Broad-spectrum insecticide for effective pest control in crops. Targets a wide range of insects, including aphids, whiteflies, and thrips, ensuring healthy plant growth and high yields.",
      category: "Solomon",
      image: "/Products/Insecticides/11-solomon.webp",
    },
    {
      title: "Paushak Insecticide",
      description: "Broad-spectrum insecticide for effective pest management in crops. Targets a variety of insects, including caterpillars, beetles, and mites, ensuring robust plant health and improved yields.",
      category: "Paushak",
      image: "/Products/Insecticides/12-paushak.webp",
    },
    {
      title: "Brofreya Insecticide",
      description: " Broad-spectrum insecticide for effective pest control in crops. Targets aphids, whiteflies, and thrips, ensuring healthy plant growth and high yields. ",
      category: "Brofreya",
      image: "/Products/Insecticides/29-brofreya-insecticide.webp",
    },
    {
      title: "Simodis Insecticide",
      description: " Versatile, broad-spectrum solution for crop protection. Effectively manages pests like aphids, whiteflies, and thrips, promoting robust plant health and maximizing yields. ",
      category: "Simodis",
      image: "/Products/Insecticides/30-simodis.webp",
    },
    {
        title: "Gracia Insecticide",
        description: "Effective pest control solution for crops, targeting a wide range of insects. Ensures healthy yields with its fast-acting, long-lasting formula. Ideal for farmers seeking reliable, crop-safe insect protection. ",
        category: "Gracia",
        image: "/Products/Insecticides/31-gracia insecticide.webp",
      },
      {
        title: "Imidacloprid Insecticide",
        description: " A systemic, broad-spectrum solution for controlling sucking and chewing pests. Protects crops, gardens, and turf with long-lasting residual action. Trusted for effective pest management and enhanced plant health.",
        category: "Imidacloprid",
        image: "/Products/Insecticides/4-fipronil 40 imidacloprid 40 police.webp",
      },
      {
        title: "Keefun Insecticide",
        description: "A powerful, broad-spectrum solution for effective pest control in crops. Targets a wide range of insects, ensuring healthy yields and robust plant protection. Ideal for farmers seeking reliable and efficient pest management. ",
        category: "Keefun",
        image: "/Products/Insecticides/5-keefun insecticide.webp",
      },
      {
        title: "Exodus Insecticide",
        description: " A highly effective solution for controlling a wide range of pests in crops. Known for its fast action and long-lasting protection, ensuring healthier yields and optimal crop performance. Trusted by farmers for reliable pest management.",
        category: "Exodus",
        image: "/Products/Insecticides/6-exodus.jpg",
      },
      {
        title: "Monostar Insecticide",
        description:"A trusted solution for effective pest control in agriculture. Targets a broad spectrum of insects, ensuring healthy crops and improved yields. Known for its reliable performance and long-lasting protection.",
        category: "Monostar",
        image: "/Products/Insecticides/8-Monostar insecticides.jpg",
      },
      {
        title: "Exponus Broflanilide Insecticide",
        description:"A next-generation solution for superior pest control in crops. Effectively targets resistant pests with its unique mode of action, ensuring long-lasting protection and healthier yields. Ideal for modern, sustainable farming.",
        category: "Exponus Broflanilide",
        image: "/Products/Insecticides/9-exponus broflanilide.avif",
      },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 md:p-6 md:px-10 md:mx-20 space-y-4   px-2">
      {cards.map((card, index) => (
        <section
          key={index}
          className="group md:block p-6 bg-green-100 rounded-xl transition-all duration-300 hover:shadow-lg mt-4 cursor-pointer"
        >
          <div className="flex flex-row items-center md:block">
          <div className="relative w-full   mx-auto md:mb-6 overflow-hidden rounded-lg  flex justify-center   ">
            <Image
              src={card.image || "/placeholder.svg"}
              alt={card.title}
              width={300}
              height={300}
              className="object-cover  md:p- transition-transform duration-300 group-hover:scale-110 bg-white h  mr-4  "
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

