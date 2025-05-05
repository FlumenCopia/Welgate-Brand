import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Banner from '@/components/Home/Banner'
import Blog from '@/components/Home/Blog'
import Contact from '@/components/Home/Contact'
import Feature2 from '@/components/Home/Feature2'
import FeatureArea from '@/components/Home/FeatureArea'
import PricingArea from '@/components/Home/PricingArea'
import ServiceArea from '@/components/Home/ServiceArea'
import ShopArea from '@/components/Home/ShopArea'
import ShopDetail from '@/components/Home/ShopDetail'
import Testimonial from '@/components/Home/Testimonial'
import VideoArea from '@/components/Home/VideoArea'
import React from 'react'

function page() {
  return (
    <div>
      <Header/>
      <Banner/>
      <FeatureArea/>
      <Feature2/>
      <VideoArea/>
      <ShopArea/>
      <ServiceArea/>
      <ShopDetail/>
      <PricingArea/>
      <Testimonial/>
      <Blog/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  )
}

export default page