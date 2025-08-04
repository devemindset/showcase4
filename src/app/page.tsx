"use client"

import type { NextPage } from "next"


import BackgroundLoader from "../components/BackgroundLoader"
import SidebarNav from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"




const Page: NextPage = () => {

 


  return (
    <>
      
      <SidebarNav />
      <Hero />
    
      <Footer  />
 
      <BackgroundLoader />
    </>
  )
}

export default Page
