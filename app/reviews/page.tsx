'use client'
import Logofinal from "@/components/navbar/Logofinal";
import { Button } from "@/components/ui/button"
import { Monitor, Phone, MapPin } from "lucide-react"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ContactInfo() {
         const router = useRouter();
    
        const goToMapPage = () => {
            router.push("/shop-map"); // Redirect to the map page
        };
  return (
    <div className="bg-green-950 flex flex-col w-full md:p-8 mt-[250px] md:h-[300px] ">
      <div className="min-h-[300px] mx-auto bg-green-50 rounded-t-xl px-2 md:px-40 py-20 -mt-[150px] relative ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center   ">
          {/* About Club Column */}
          <div className="flex flex-col items-center -mt-24">
            <div className="bg-green-600  rounded-full p-4 mb-6">
              <Monitor className="w-8 h-8 text-white" />
            </div>
               <div className=" ">
                        <Logofinal />
                      </div>
                      <h1 className="max-w-sm md:max-w-lg">Cultivating growth, nurturing nature-empowering farmers for a sustainable tomorrow.</h1>

          </div>

          {/* Phone Column */}
          <div className="flex flex-col items-center md:-mt-24">
            <div className="bg-green-600    rounded-full p-4 mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-4 text-blue-950">PHONE </h2>
            <div className="space-y-2">
              <p className="text-gray-600">+91-9488239034</p>
             </div>
             <h1 className="mt-10 bg-green-600   text-white ring-2 ring-yellow-200 rounded-md p-2 font-bold    ">Shop Timing 7am - 8pm</h1>
          </div>

          {/* Location Column */}
          <div className="flex flex-col items-center md:-mt-24 ">
            <div className="bg-green-600    rounded-full p-4 mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-4 text-blue-950"> LOCATION</h2>
            <div className="space-y-2">
              <p className="text-gray-600">Vivasayi Agri clinic &agro service center,</p>
              <p className="text-gray-600"> Bhavani - Vellithiruppur Rd, Olagadam,</p>
              <p className="text-gray-600  "> Tamil Nadu 638314</p>
              <Button  asChild variant="outline"
              className="py-4   bg-green-50 hover:shadow-2xl ring-black hover:bg-white  ring-1 hover:ring-green-600 text-blue-950">
              <Link href={"https://www.google.com/maps/place/Vivasayi+Agri+clinic+%26agro+service+center/@11.5718916,77.6373993,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba947b9776046eb:0x182ac191658304f2!8m2!3d11.5718916!4d77.6399742!16s%2Fg%2F11vqkz86jx?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoASAFQAw%3D%3D"}>

                 Open in Google Maps
                 </Link>
            </Button>
            </div>
          
          </div>
          
        </div>
      </div>
      <div className="text-gray-200 border-gray-700 gap-x-3 px- pt-6 p-  text-center justify-center flex flex-co md:justify-between mx-auto  w-full ">
          <div className=" text-sm font-thin   ">
            &copy; 2024 vivasayi. All Rights Reserved.
          </div>
          <div
            className="md:right-0 text-center   items-center text-xs hover:text-white transition-colors
        flex justify-between flex-row m  md:text-sm font-thin"
          >
            <Link href="#" className="mr-1">
              <div className="underline">
                <h1 className="">Privacy Policy</h1>
              </div>
            </Link>
            <div className=" ">|</div>

            <Link href="#" className="ml-1">
              <span className="underline">Terms & Conditions</span>
            </Link>
          </div>
        </div>
    </div>
  )
}

