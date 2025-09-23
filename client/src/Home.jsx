import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import { Footer } from './components/Footer'
import About from './components/About'
import Vision from './components/Vision'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import CEODesk from './components/CEODesk'
import { TeamPage } from './components/Team'
import WhatsAppButton from './components/WhatsappButton'


export default function Home() {
  return (
    <div className='max-w-full  bg-white' >


      <Navbar />


      <Hero />

<WhatsAppButton/>
      <About />
      <Services />

      <Vision />

      <CEODesk />
      <TeamPage />

      <FAQ />

      <Contact />

      <Footer />
    </div>
  )
}
