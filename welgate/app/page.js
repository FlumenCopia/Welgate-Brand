import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Banner from '@/components/Home/Banner'
import Feature2 from '@/components/Home/Feature2'
import FeatureArea from '@/components/Home/FeatureArea'
import React from 'react'

function page() {
  return (
    <div>
      <Header/>
      <Banner/>
      <FeatureArea/>
      <Feature2/>
      <Footer/>
    </div>
  )
}

export default page