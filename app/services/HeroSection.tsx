import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from 'next/image'

export default function WelcomeHero() {
    const images = [
         "/croplap1.jpg",
         "/pesticide.jpg",
        "/seeds.jpg",
        "/manure.jpg",
       
      ];
  return (
    <><div className="containe mx-auto px-4 py-12 md:py-">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8 mt-10">
                   <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">Welcome to Our Website</h1>
                  <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro
                      facilis quo animi consequatur. Explicabo.
                  </p>
                  <Button className="group">
                      Primary
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
              </div>
              <div className="hidden lg:grid grid-cols-2 gap-x-3 xl:bg-yellow-20">
                  <div className="aspect-square bg-muted rounded-lg">
                      <Image
                          src="/buffalo.jpg"
                          alt="Grid image 2"
                          width={400}
                          height={500}
                          className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square  rounded-lg   row-start-2 xl:-mt-[320px] lg:-mt-[216px] xl:py-5 xl:pb-8 pb-4 py-2  ">

                      <Image
                          src="/seeds.jpg"
                          alt="Grid image 2"
                          width={400}
                          height={500}
                          className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[9/16] bg-muted rounded-lg mt-10">
                      <Image
                          src="/cropmob1.jpg"
                          alt="Grid image 2"
                          width={400}
                          height={500}
                          className="w-full h-full object-cover" />
                  </div>



              </div>
          </div>

      </div><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 p-10 w-full lg:bg-yellow-10\0">
              {images.map((src, index) => (
                  <div key={index} className="relative w-full aspect-square">
                      <Image
                          src={src}
                          alt={`Image ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg" />
                  </div>
              ))}
          </div></>
  )
}

