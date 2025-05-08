import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Gallerypage from '@/components/galleries/Gallerypage'
import React from 'react'

function page() {
  return (
    <div>
        <Header/>
        <Gallerypage/>
        <Footer/>
    </div>
  )
}

export default page