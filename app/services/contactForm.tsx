'use client'
import { Button } from "@/components/ui/button"
import { Monitor, Phone, MapPin } from "lucide-react"
import { useRouter } from "next/navigation";

export default function ContactInfo() {
         const router = useRouter();
    
        const goToMapPage = () => {
            router.push("/shop-map"); // Redirect to the map page
        };
  return (
    <div className="bg-red-950 flex flex-col w-full p-8 mt-[250px] md:h-64 ">
      <div className="min-h-[300px] mx-auto bg-red-50 rounded-t-xl px-40 py-20 -mt-[150px] relative ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center   ">
          {/* About Club Column */}
          <div className="flex flex-col items-center -mt-24">
            <div className="bg-red-950  rounded-full p-4 mb-6">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-4">ABOUT CLUB</h2>
            <div className="space-y-2">
              <p className="text-gray-600">Running Guide</p>
              <p className="text-gray-600">Workouts</p>
            </div>
          </div>

          {/* Phone Column */}
          <div className="flex flex-col items-center md:-mt-24">
            <div className="bg-red-950  rounded-full p-4 mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-4">PHONE (LANDLINE)</h2>
            <div className="space-y-2">
              <p className="text-gray-600">+ 912 3 567 8987</p>
              <p className="text-gray-600">+ 912 5 252 3336</p>
            </div>
          </div>

          {/* Location Column */}
          <div className="flex flex-col items-center md:-mt-24 ">
            <div className="bg-red-950  rounded-full p-4 mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-4"> LOCATION</h2>
            <div className="space-y-2">
              <p className="text-gray-600">Vivasayi Agri clinic &agro service center,</p>
              <p className="text-gray-600"> Bhavani - Vellithiruppur Rd, Olagadam,</p>
              <p className="text-gray-600"> Tamil Nadu 638314</p>
              <Button  onClick={goToMapPage} variant="outline">
                 Open in Google Maps
            </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

