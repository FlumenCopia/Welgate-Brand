import React from 'react'

function Blog2() {
  return (
    <div>
        <section id="news" className="blog-post-area-two section-pt-130 section-pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title section-title-two text-center mb-70">
                                <span className="sub-title">
                                    <img src="assets/img/icons/sub_left.svg" className="injectable" alt="img"/>
                                    Read blog
                                    <img src="assets/img/icons/sub_right.svg" className="injectable" alt="img"/>
                                </span>
                                <h2 className="title">Read Blog Post</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <a href="blog-details.html"><img src="assets/img/blog/h3_blog_post01.jpg" alt="img"/></a>
                                </div>
                                <div className="blog-post-content-two">
                                    <div className="blog-post-meta">
                                        <ul className="list-wrap">
                                            <li><a href="blog.html">Tutorials</a></li>
                                            <li><a href="blog.html">February. 20.2024</a></li>
                                        </ul>
                                    </div>
                                    <h2 className="title"><a href="blog-details.html">How to add a count up animation the webflow site.</a></h2>
                                    <p>At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="blog-post-item-two">
                                <div className="blog-post-thumb-two">
                                    <a href="blog-details.html"><img src="assets/img/blog/h3_blog_post02.jpg" alt="img"/></a>
                                </div>
                                <div className="blog-post-content-two">
                                    <div className="blog-post-meta">
                                        <ul className="list-wrap">
                                            <li><a href="blog.html">Business</a></li>
                                            <li><a href="blog.html">February. 20.2024</a></li>
                                        </ul>
                                    </div>
                                    <h2 className="title"><a href="blog-details.html">How to grow your business with collax digital solution.</a></h2>
                                    <p>At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Blog2