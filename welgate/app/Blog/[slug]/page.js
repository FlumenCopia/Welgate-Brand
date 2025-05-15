"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Preloader from "@/components/common/Preloader";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";


function page() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(`https://welgatelifestyle.com/api/blogs/${slug}/`)
      .then((res) => {
        if (!res.ok) throw new Error("Blog not found");
        return res.json();
      })
      .then((data) => {
        setBlog(data);
        // setLoading(false);
      })
  },);

  if (!blog) return <div><Preloader/></div>;

//   if (error) return <p>Error: {error}</p>;
  return (
    
    <div>
        
        <Header/>


 <section className="breadcrumbblog">
            <nav className="container breadcrumb-container">
                <h3 className='breadcrumbstyle'>Blog</h3>
                <ol className="cd-breadcrumb">
                  <li><a href="/">Home</a></li>
                  <li className="current text-success">Blog</li>
                    <li className="current text-success">{blog.name}</li>

                </ol>
              </nav>
        </section>

        <section className='blog-details '>
        <div className='container container'>
          <div className='row gy-5'>
            <div className=''>
              <div className='blog-item-wrapper'>
                <h1>{blog.name}</h1>
                <div className='blog-item'>
                  <div className='blog-item__content mt-24'>
                  
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blog.content,
                      }}
                    />

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer/>

    </div>
  )
}

export default page