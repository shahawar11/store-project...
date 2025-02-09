import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-8 space-y-6 lg:space-y-0 lg:space-x-8">
      
      {/* Image Comparison Section */}
      <div className="p-1 border border-yellow-700 rounded-md dark:bg-neutral-900 bg-yellow-100 dark:border-neutral-800">
        <Compare
          firstImage="/before.jpg"
          secondImage="/after.jpg"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[300px] w-[450px] sm:h-[400px] sm:w-[650px] md:h-[500px] md:w-[900px] lg:h-[500px] lg:w-[700px] xl:h-[500px] xl:w-[900px]"
          slideMode="hover"
        />
      </div>

      {/* Content Section - Hidden on small screens */}
      <div className="w-full max-w-md lg:block">
        <div className="bg-white p-6 rounded-lg shadow-md border border-green-300">
          <h3 className="text-2xl font-semibold text-green-800 flex items-center gap-2">
            🌱 Soil & Water Testing 💧
          </h3>
          <p className="text-gray-600 mt-4">
            Soil and water testing are essential for sustainable farming. They help in understanding nutrient levels, pH balance, and contamination risks, ensuring better crop growth and soil health.
          </p>
          <ul className="text-gray-700 mt-4 list-disc list-inside space-y-2">
            <li><strong>Optimize Fertilizer Use:</strong> Avoid overuse and save costs.</li>
            <li><strong>Improve Crop Yield:</strong> Ensure balanced nutrients for healthier plants.</li>
            <li><strong>Prevent Soil Degradation:</strong> Maintain long-term fertility.</li>
            <li><strong>Safe Water for Irrigation:</strong> Detect harmful contaminants.</li>
            <li><strong>Boost Sustainability:</strong> Promote eco-friendly farming practices.</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
