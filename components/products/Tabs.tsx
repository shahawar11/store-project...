"use client"
import Herbicides from "@/components/products/productList/Herbicides"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Fungicides from "./productList/Fungicides"
import Insecticides from "./productList/Insecticides"
import Seeds from "./productList/seeds"
import Machines from "./productList/machines"
import Fertilizer from "./productList/Fertilizer"
 
export function TabsDemo() {
  return (
    <section className="mt-10 md:px-10 py-20 lg:p-20 flex justify-center bg-yellow-50">
      <Tabs defaultValue="Herbicides" className="w-full">
        <TabsList className="flex justify-center flex-col lg:flex-row w-full text-xl">
          <TabsTrigger value="Herbicides" className="flex-grow">
            Herbicides
          </TabsTrigger>
          <Separator orientation="vertical" className="bg-yellow-950 hidden lg:block" />
          <TabsTrigger value="Fungicides" className="flex-grow">
            Fungicides
          </TabsTrigger>
          <Separator orientation="vertical" className="bg-yellow-950 hidden lg:block" />
          <TabsTrigger value="Insecticides" className="flex-grow">
            Insecticides
          </TabsTrigger>
          <Separator orientation="vertical" className="bg-yellow-950 hidden lg:block" />
          <TabsTrigger value="Seeds" className="flex-grow">
            Seeds
          </TabsTrigger>
          <Separator orientation="vertical" className="bg-yellow-950 hidden lg:block" />
          <TabsTrigger value="Machines" className="flex-grow">
            Machines
          </TabsTrigger>
          <Separator orientation="vertical" className="bg-yellow-950 hidden lg:block" />
          <TabsTrigger value="Fertilizer" className="flex-grow">
Fertilizer          </TabsTrigger>
        </TabsList>
        <TabsContent value="Herbicides" className="mt-20 w-full">
          <div className="  gap-4 w-full">
            <Herbicides/>
           </div>
        </TabsContent>
        <TabsContent value="Fungicides" className="mt-20">
          <div className="gap-4 w-full">
            <Fungicides/>
          </div>
        </TabsContent>
        <TabsContent value="Insecticides" className="mt-20">
          <div className="gap-4 w-full">
            <Insecticides/>
          </div>
        </TabsContent>
        <TabsContent value="Seeds" className="mt-20">
          <div className="gap-4 w-full">
<Seeds/>          </div>
        </TabsContent>
        <TabsContent value="Machines" className="mt-20">
          <div className="gap-4 w-full">
            <Machines/>
          </div>
        </TabsContent>
        <TabsContent value="Fertilizer" className="mt-20">
          <div className="gap-4 w-full">
            <Fertilizer/>
          </div>
        </TabsContent>
        
       </Tabs>
    </section>
  )
}

