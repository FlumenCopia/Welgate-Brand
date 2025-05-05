import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Banner from '@/components/Home/Banner'
import Blog from '@/components/Home/Blog'
import Blog2 from '@/components/Home/Blog2'
import Contact from '@/components/Home/Contact'
import Counter from '@/components/Home/Counter'
import Faq from '@/components/Home/Faq'
import Feature2 from '@/components/Home/Feature2'
import Feature3 from '@/components/Home/Feature3'
import FeatureArea from '@/components/Home/FeatureArea'
import IngredientsArea from '@/components/Home/IngredientsArea'
import Newsletter from '@/components/Home/Newsletter'
import PricingArea from '@/components/Home/PricingArea'
import ServiceArea from '@/components/Home/ServiceArea'
import ShopArea from '@/components/Home/ShopArea'
import ShopDetail from '@/components/Home/ShopDetail'
import Testimonial from '@/components/Home/Testimonial'
import Testimonial2 from '@/components/Home/Testimonial2'
import VideoArea from '@/components/Home/VideoArea'
import React from 'react'

function page() {
  return (
    <div>
      <Header/>
      <Banner/>
      <FeatureArea/>
      <Feature2/>
      <Feature3/>
      <Counter/>
      <IngredientsArea/>
      <VideoArea/>
      <ShopArea/>
      <ServiceArea/>
      <ShopDetail/>
      <PricingArea/>
      <Testimonial/>
      <Testimonial2/>
      <Blog/>
      <Blog2/>
      <Faq/>
      <Newsletter/>

      {/* <Contact/> */}
      <Footer/>
    </div>
  )
}

export default page