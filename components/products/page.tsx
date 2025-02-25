import React from 'react'
import HeroSection from './Hero'
import { TabsDemo } from './Tabs'
 
const ProductDemo = () => {
  return (
     <>
     <HeroSection/>
<div className=''>
  <h1 className='flex justify-center text-2xl font-semibold underline text-blue-950'>Our Products</h1>
<TabsDemo/>
</div>       </>
  )
}

export default ProductDemo