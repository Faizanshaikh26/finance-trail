import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import { Footer } from './components/Footer'
import About from './components/About'
import Vision from './components/Vision'


export default function Home() {
  return (
    <div >

        <Navbar/>

       
 <Hero/>

 <About/>
        <Services/>

        <Vision/>
     
       
        <Footer/>
    </div>
  )
}
