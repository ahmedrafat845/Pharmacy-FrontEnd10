import React from 'react'
import Diseases from './diseases/diseases'
import Slider from './slider/slider';
import Offers from './Offers/Offers';
import MedicalTourism from './MedicalTourism/MedicalTourism';
import Ask from './Ask/Ask';
import BestSeller from './bestSeller/BestSeller';
import Test from './Test/Test';





export default function Home() {
  return (
    <>
      <Slider/>
      <Diseases/>
      <Offers/>
      <MedicalTourism/>
      <Ask/>
      <BestSeller/>
      <Test/>
      
    </>
  )
}
