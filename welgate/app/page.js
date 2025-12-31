
// import Banner from '@/components/Home/Banner'
// import Blog from '@/components/Home/Blog'
// import Blog2 from '@/components/Home/Blog2'
// import Contact from '@/components/Contacts/Contact'
import Counter from '@/components/Home/Counter'
// import Feature2 from '@/components/Home/Feature2'
// import Feature3 from '@/components/About-us/Feature3'
// import FeatureArea from '@/components/Home/FeatureArea'
import HomeMission from '@/components/Home/HomeMission'
import Newsletter from '@/components/Home/Newsletter'
// import PricingArea from '@/components/Home/PricingArea'
import HomeCards from '@/components/Home/HomeCards'
import HomeSlick from '@/components/Home/HomeSlick'
import HomeAbout from '@/components/Home/HomeAbout'
// import Testimonial from '@/components/Home/Testimonial'
import Testimonial2 from '@/components/Home/Testimonial2'
import HomeService from '@/components/Home/HomeService'
import React from 'react'
import Clients from '@/components/Home/Clients'
// import Historybg from '@/components/Home/Historybg'
import HomeBrand from '@/components/Home/HomeBrand'
// import VideoSlick from '@/components/Home/VideoSlick'
import Initiative from '@/components/Home/Initiative'
import Slickbanner from '@/components/Home/Slickbanner'
import Tributevideo from '@/components/Home/Tributevideo'



function page() {
  return (
    <div>
      
      {/* <VideoSlick/> */}
      <Slickbanner/>
      {/* <Banner/> */}
      {/* <FeatureArea/> */}
      {/* <Feature2/> */}
      <HomeAbout/>
      <Tributevideo/>
      <HomeBrand/>
      <Initiative/>
      <HomeService/>
      <HomeCards/>
      {/* <Feature3/> */}
      <HomeSlick/>
      {/* <Historybg/> */}
      <HomeMission/>
      <Counter/>     
      {/* <PricingArea/> */}
      {/* <Testimonial/> */}
      <Testimonial2/>
      {/* <Blog/> */}      
      <Clients/>
      <Newsletter/>
    
    </div>
  )
}

export default page