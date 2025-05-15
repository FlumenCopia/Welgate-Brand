
import About_contact from '@/components/About-us/About_contact'
import Breadcrumbs from '@/components/About-us/Breadcrumbs'
import Faq from '@/components/About-us/Faq'
import Feature3 from '@/components/About-us/Feature3'
import Mission from '@/components/About-us/Mission'
import Vision_about from '@/components/About-us/Vision_about'

import Testimonial2 from '@/components/Home/Testimonial2'

import React from 'react'

export const page = () => {
  return (
    <div>
        
         <Breadcrumbs/>
       
         <Mission/>
         <Vision_about/>
         <Feature3/>
        
         <Faq/>
         <Testimonial2/>
         <About_contact/>
       
    </div>
  )
}
export default page