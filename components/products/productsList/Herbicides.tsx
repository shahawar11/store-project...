import ProductsLayout from "@/app/products/productsLayout"

const products = [
  {
    id: 1,
    name: "Glycel",
    description: "Elegant timepiece with a leather strap",
    imageUrl: "/Products/1-glycel.png?height=200&width=200",
  },
  {
    id: 2,
    name: "Roundup ",
    description: "High-quality sound with long battery life",
    imageUrl: "/Products/2-Roundup Herbicide.png?height=200&width=200",
  },
  {
    id: 3,
    name: "laudis herbicide",
    description: "Slim and stylish with RFID protection",
    imageUrl: "/Products/3-laudis herbicide.webp?height=200&width=200",
  },
  {
    id: 4,
    name: "fipronil 40 imidacloprid 40 police",
    description: "UV protection with polarized lenses",
    imageUrl: "/Products/4-fipronil 40 imidacloprid 40 police.webp?height=200&width=200",
  },
//   {
//     id: 5,
//     name: "keefun insecticide",
//     description: "Elegant timepiece with a leather strap",
//     imageUrl: "/Products/5-keefun insecticide.webp?height=200&width=200",
//   },
//   {
//     id: 6,
//     name: "exodus",
//     description: "High-quality sound with long battery life",
//     imageUrl: "/Products/6-exodus.jpg?height=200&width=200",
//   },
//   {
//     id: 7,
//     name: "Super-Boost",
//     description: "Slim and stylish with RFID protection",
//     imageUrl: "/Products/7-Super-Boost.jpg?height=200&width=200",
//   },
//   {
//     id: 8,
//     name: "Monostar insecticides",
//     description: "UV protection with polarized lenses",
//     imageUrl: "/Products/8-Monostar insecticides.jpg?height=200&width=200",
//   },
//   {
//     id: 9,
//     name: "exponus broflanilide",
//     description: "Elegant timepiece with a leather strap",
//     imageUrl: "/Products/9-exponus broflanilide.avif?height=200&width=200",
//   },
//   {
//     id: 10,
//     name: "perfekt herbal",
//     description: "High-quality sound with long battery life",
//     imageUrl: "/Products/10-perfekt herbal.jpeg?height=200&width=200",
//   },
//   {
//     id: 11,
//     name: "Leather Wallet",
//     description: "Slim and stylish with RFID protection",
//     imageUrl: "/public/Products?height=200&width=200",
//   },
//   {
//     id: 12,
//     name: "Sunglasses",
//     description: "UV protection with polarized lenses",
//     imageUrl: "/public/Products?height=200&width=200",
//   },
//   {
//     id: 13,
//     name: "Classic Watch",
//     description: "Elegant timepiece with a leather strap",
//     imageUrl: "/public/Products?height=200&width=200",
//   },
//   {
//     id: 14,
//     name: "Wireless Earbuds",
//     description: "High-quality sound with long battery life",
//     imageUrl: "/public/Products?height=200&width=200",
//   },
//   {
//     id: 15,
//     name: "Leather Wallet",
//     description: "Slim and stylish with RFID protection",
//     imageUrl: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 16,
//     name: "Sunglasses",
//     description: "UV protection with polarized lenses",
//     imageUrl: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 17,
//     name: "Classic Watch",
//     description: "Elegant timepiece with a leather strap",
//     imageUrl: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 18,
//     name: "Wireless Earbuds",
//     description: "High-quality sound with long battery life",
//     imageUrl: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 19,
//     name: "Leather Wallet",
//     description: "Slim and stylish with RFID protection",
//     imageUrl: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 20,
//     name: "Sunglasses",
//     description: "UV protection with polarized lenses",
//     imageUrl: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 21,
//     name: "Classic Watch",
//     description: "Elegant timepiece with a leather strap",
//     imageUrl: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 22,
//     name: "Wireless Earbuds",
//     description: "High-quality sound with long battery life",
//     imageUrl: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 23,
//     name: "Leather Wallet",
//     description: "Slim and stylish with RFID protection",
//     imageUrl: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 24,
//     name: "Sunglasses",
//     description: "UV protection with polarized lenses",
//     imageUrl: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 25,
//     name: "Sunglasses",
//     description: "UV protection with polarized lenses",
//     imageUrl: "/placeholder.svg?height=200&width=200",
//   },
]

export default function ProductHerbicides() {
  return (
    <div className="container mx-auto px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-6 lg:gap-10">
        {products.map((product) => (
          <ProductsLayout key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

