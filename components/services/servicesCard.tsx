import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  image: string
}

export function ServiceCard({ title, description, features, image }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-visible">
      <div className="p-6 relative pt-32">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={200}
            height={200}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
        <p className="text-gray-600 mb-4 text-center">{description}</p>
        <ul className="text-sm text-gray-500 mb-4">
          {features.map((feature, idx) => (
            <li key={idx} className="mb-1">
              • {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

