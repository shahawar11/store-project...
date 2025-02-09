"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductHerbicides from './productsList/Herbicides';

export function TabsDemo() {
  return (
    <section className="mt-10 md:px-10 py-20 lg:p-20 flex justify-center">
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
        </TabsList>
        <TabsContent value="Herbicides" className="mt-20 w-full">
          <div className="  gap-4 w-full">
            <ProductHerbicides />
          </div>
        </TabsContent>
        <TabsContent value="Fungicides" className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        {/* Add other TabsContent components for Insecticides, Seeds, and Machines */}
      </Tabs>
    </section>
  )
}

