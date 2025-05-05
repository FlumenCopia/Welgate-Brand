import React from 'react'

function Blog() {
  return (
    <div>
        <section id="news" className="tg-blog-area pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="tg-section-title text-center mb-60">
                                <h6 className="sub-title">Latest News</h6>
                                <h2 className="title">Suxnix News Feeds</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                            <div className="tg-blog-post-item mb-30 wow fadeInUp" data-wow-delay=".2s">
                                <div className="tg-blog-post-thumb">
                                    <a href="blog-details.html"><img src="assets/img/blog/blog_post_thumb01.jpg" alt=""/></a>
                                    <div className="tg-blog-overlay-tag">
                                        <a href="#">Foods</a>
                                    </div>
                                </div>
                                <div className="tg-blog-post-content">
                                    <div className="post-date"><i className="far fa-calendar-alt"></i> 24th September 2024</div>
                                    <h4 className="title"><a href="blog-details.html">Lorem ipsum dolor consectetur sit amet adipisicing</a></h4>
                                    <a href="blog-details.html" className="read-more"><span>Read More</span> <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                            <div className="tg-blog-post-item mb-30 wow fadeInUp" data-wow-delay=".4s">
                                <div className="tg-blog-post-thumb">
                                    <a href="blog-details.html"><img src="assets/img/blog/blog_post_thumb02.jpg" alt=""/></a>
                                    <div className="tg-blog-overlay-tag">
                                        <a href="#">Gym</a>
                                    </div>
                                </div>
                                <div className="tg-blog-post-content">
                                    <div className="post-date"><i className="far fa-calendar-alt"></i> 24th September 2024</div>
                                    <h4 className="title"><a href="blog-details.html">Best ways to support your healthy immune system</a></h4>
                                    <a href="blog-details.html" className="read-more"><span>Read More</span> <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                            <div className="tg-blog-post-item mb-30 wow fadeInUp" data-wow-delay=".6s">
                                <div className="tg-blog-post-thumb">
                                    <a href="blog-details.html"><img src="assets/img/blog/blog_post_thumb03.jpg" alt=""/></a>
                                    <div className="tg-blog-overlay-tag">
                                        <a href="#">Fitness</a>
                                    </div>
                                </div>
                                <div className="tg-blog-post-content">
                                    <div className="post-date"><i className="far fa-calendar-alt"></i> 24th September 2024</div>
                                    <h4 className="title"><a href="blog-details.html">Organic food is produced methods complying</a></h4>
                                    <a href="blog-details.html" className="read-more"><span>Read More</span> <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Blog