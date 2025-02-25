import Image from "next/image";
 
export default function WelcomeHero() {
  const images = ["/croplap1.jpg", "/pesticide.jpg", "/seeds.jpg", "/manure.jpg"];

  return (
    <>
      <div className="padding container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 mt-10">
            <h1 className="text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-blue-950 lg:max-w-[600px]">
              Empowering Your Farm
              <p className="text-4xl md:text-5xl lg:text-4xl xl:text-4xl font-semibold pt-2">
                Advanced Agro Services & Machine Rentals for Smarter Farming
              </p>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl ld:max-w-[600px]">
              Boost your agricultural productivity with our comprehensive agro services. 
              From state-of-the-art machine rentals to precise soil and water testing, 
              we provide the tools and expertise you need to optimize your farm&apos;s potential. 
              Whether you&apos;re preparing for planting or ensuring your soil&apos;s health, 
              our solutions are designed to support every step of your farming journey. 
              Experience the future of agriculture with us—where innovation meets tradition.
            </p>

            {/* Key Features Section */}
            <div className="hidden md:mt-8 md:grid md:grid-cols-1 md:sm:grid-cols-2 md:lg:grid-cols-4 gap-6">
              {/* Point 1 */}
              <div className="p-6 bg-white rounded-lg shadow-md border border-green-200">
                <h3 className="text-xl font-semibold text-blue-950">Advanced Machinery Rentals</h3>
                <p className="mt-2 text-gray-600">
                  Access the latest farming equipment on rent to maximize efficiency and reduce costs.
                </p>
              </div>

              {/* Point 2 */}
              <div className="p-6 bg-white rounded-lg shadow-md border border-green-200">
                <h3 className="text-xl font-semibold text-blue-950">Precision Soil Testing</h3>
                <p className="mt-2 text-gray-600">
                  Get accurate soil analysis to optimize fertilizer use and improve crop yield.
                </p>
              </div>

              {/* Point 3 */}
              <div className="p-6 bg-white rounded-lg shadow-md border border-green-200">
                <h3 className="text-xl font-semibold text-blue-950">Water Quality Analysis</h3>
                <p className="mt-2 text-gray-600">
                  Ensure the best water quality for irrigation with our comprehensive testing services.
                </p>
              </div>

              {/* Point 4 */}
              <div className="p-6 bg-white rounded-lg shadow-md border border-green-200">
                <h3 className="text-xl font-semibold text-blue-950">Expert Support</h3>
                <p className="mt-2 text-gray-600">
                  Our team of agricultural experts is always available to guide you for better farming practices.
                </p>
              </div>
            </div>
          </div>

          {/* Image Grid Section */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {/* First Column */}
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/buffalo.jpg"
                alt="Buffalo"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Second Column */}
            <div className="aspect-square rounded-lg overflow-hidden row-start-2 lg:-mt-[200px] xl:-mt-[250px]">
              <Image
                src="/seeds.jpg"
                alt="Seeds"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Third Column */}
            <div className="aspect-[9/16] rounded-lg overflow-hidden mt-8">
              <Image
                src="/cropmob1.jpg"
                alt="Crop Mobile"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((src, index) => (
          <div key={index} className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </>
  );
}
