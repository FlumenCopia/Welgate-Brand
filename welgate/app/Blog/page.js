import Header from '@/components/common/Header'
import Blog2 from '@/components/Home/Blog2'
import Footer from '@/components/common/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header category={true}/>
         <Blog2/>
         <Footer/>
    </div>
  )
}

export default page