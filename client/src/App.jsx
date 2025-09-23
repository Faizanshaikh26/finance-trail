import React from 'react'
import Home from './Home'
import LenisScroll from './components/LenisScroll'
import { Route, Routes } from 'react-router-dom'
import VehicleLoan from './pages/VehicleLoan'
import GoldLoan from './pages/GoldLoan'
import PersonalLoan from './pages/PersonalLoan'
import IndustrialFinance from './pages/IndustrialFinance'
import LAP from './pages/LAP'
import PrivateFinance from './pages/PrivateFinance'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className=' w-full min-h-screen  font-inter'>

<ScrollToTop/>
      <LenisScroll />

      <Routes>

        <Route path='/' element={<Home />} />


        <Route path='/services/vehicle-loan' element={<VehicleLoan />} />
        <Route path='/services/gold-loan' element={<GoldLoan />} />
        <Route path='/services/loan-against-property' element={<LAP />} />
        <Route path='/services/industrial-finance' element={<IndustrialFinance />} />
        <Route path='/services/personal-loan' element={<PersonalLoan />} />
        <Route path='/services/private-finance' element={<PrivateFinance />} />


      </Routes>



    </div>
  )
}
