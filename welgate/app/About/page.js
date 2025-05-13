

import About_banner from '@/components/About-us/About_banner'
import About_contact from '@/components/About-us/About_contact'
import About_value from '@/components/About-us/About_value'
import Breadcrumbs from '@/components/About-us/Breadcrumbs'
import Faq from '@/components/About-us/Faq'
import Feature3 from '@/components/About-us/Feature3'
import Mission from '@/components/About-us/Mission'
import Vision_about from '@/components/About-us/Vision_about'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Feature2 from '@/components/Home/Feature2'
import Testimonial2 from '@/components/Home/Testimonial2'

import React from 'react'

export const page = () => {
  return (
    <div>
         <Header/>
         <Breadcrumbs/>
         {/* <About_banner/> */}
         <Mission/>
         <Vision_about/>
         <Feature3/>
         {/* <About_value/> */}
         <Faq/>
         <Testimonial2/>
         <About_contact/>
        <Footer/>
    </div>
  )
}
export default page