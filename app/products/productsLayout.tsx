"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Product {
  id: number
  name: string
  description: string
  imageUrl: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductsLayout({ product }: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDescription = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out group">
      <div className="relative">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <button
          onClick={toggleDescription}
          className="w-full text-left  rounded"
          aria-expanded={isOpen}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <span className="md:hidden">
              {isOpen ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </span>
          </div>
        </button>

        {/* Desktop: Show description on hover */}
        <div className="hidden md:block duration-1000">
          <div className="overflow-hidden transition-all duration-300  max-h-0 group-hover:max-h-40">
            <p className="text-sm text-gray-500 mt-2">{product.description}</p>
          </div>
        </div>

        {/* Mobile: Show description in dropdown */}
        <div className="md:hidden">
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-40 mt-2" : "max-h-0"
            }`}
          >
            <p className="text-sm text-gray-500">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

