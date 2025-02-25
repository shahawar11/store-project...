import React from 'react'
import WelcomeHero from './HeroSection'
import Chooseus from './chooseus'
import { CompareDemo } from './compare'
import ImageCards from './servicemachines'
  
function ServicesPage() {
  return (
    <div className='pt-20'>
     <WelcomeHero/>
     <Chooseus/>
 <CompareDemo/>
 <ImageCards/>    
   </div>
  )
}

export default ServicesPage
