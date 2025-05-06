

import About_banner from '@/components/About-us/About_banner'
import About_value from '@/components/About-us/About_value'
import Mission from '@/components/About-us/Mission'
import Vision_about from '@/components/About-us/Vision_about'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Feature2 from '@/components/Home/Feature2'

import React from 'react'

export const page = () => {
  return (
    <div>
         <Header/>
         {/* <About_banner/> */}
         <Mission/>
         <Vision_about/>
         <About_value/>
        <Footer/>
    </div>
  )
}
export default page