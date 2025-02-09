import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative h-[400px] w-full">
      <Image
        src="/soil.jpg?height=1080&width=1920"
        // src="/productHero01.png?height=1080&width=1920"

        alt="Hero background"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" /> {/* Overlay for better text visibility */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">Welcome to Our Website</h1>
          <p className="mb-8 text-xl text-white sm:text-2xl">Discover amazing things with us</p>
          
        </div>
      </div>
    </div>
  )
}

