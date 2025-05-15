"use client"
import React, { useState ,useEffect} from 'react';
import Link from "next/link";
import truncate from "html-truncate";


function Blog2() {



  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    fetch("https://welgatelifestyle.com/api/blogs/")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div>
      <section className="breadcrumbblog">
        <nav className="container breadcrumb-container">
          <h3 className='breadcrumbstyle'>Blog</h3>
          <ol className="cd-breadcrumb">
            <li><a href="/">Home</a></li>
            <li className="current text-success">Blog</li>
          </ol>
        </nav>
      </section>

      <section id="news" className="blog-post-area-two section-pt-130 section-pb-100">
        <div className="container">
          <div className="row justify-content-center"></div>

          <div className="row">
                    {blogs.map((blog) => (

            <div  key={blog.id} className="col-12 col-md-6 col-lg-3 mb-4 ">
              <div className="card blogcard flex-column border-0"style={{borderRadius:'20px'}}>
                <img src={blog.image} className="card-img-top" alt="img"  />
                <div className="card-body d-flex flex-column">
                  <Link href={`/Blog/${blog.slug}`}  className="card-title pfont">{blog.name}</Link>
                  <div className='card-text'
                  dangerouslySetInnerHTML={{
                    __html: blog.content.length > 100 ? truncate(blog.content, 100) : blog.content,
                  }}
                />
          
                  <div className="mt-auto">
                    <Link href={`/Blog/${blog.slug}`}  className="btn btn-sm  w-100">Read More</Link>
                  </div>
                </div>
                                  <p className='mt-2 mx-4 justify-content-end'>{blog.date}</p>

              </div>
            </div>
 ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog2;
