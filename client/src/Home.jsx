import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import { Footer } from './components/Footer'
import About from './components/About'
import Vision from './components/Vision'
import FAQ from './components/FAQ'
import Contact from './components/Contact'


export default function Home() {
  return (
    <div  className='max-w-full  ' >
  

      <Navbar />


      <Hero />

      <About />
      <Services />

      <Vision />

      <FAQ />

      <Contact />

      <Footer />
    </div>
  )
}
