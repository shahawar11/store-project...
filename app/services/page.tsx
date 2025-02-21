import React from 'react'
import WelcomeHero from './HeroSection'
import Chooseus from './chooseus'
import { CompareDemo } from './compare'
import { TypewriterEffectSmoothDemo } from './Typewriter'
import { ServiceCard } from '@/components/services/servicesCard'
import ImageCards from './servicemachines'
import ContactInfo from '../reviews/page'
 
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
