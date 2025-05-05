import React from 'react'

function VideoArea() {
  return (
    <div>
        <section className="tg-video-area tg-video-bg jarallax parallax-img">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="tg-video-img wow fadeInLeft" data-wow-delay=".2s">
                                <img src="assets/img/others/video_img.jpg" alt=""/>
                                <a href="https://www.youtube.com/watch?v=2ZjdBY8aOrA" className="play-btn popup-video">
                                    <i className="fas fa-play"></i></a>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-8">
                            <div className="tg-video-content wow fadeInRight" data-wow-delay=".2s">
                                <div className="tg-section-title white mb-30">
                                    <span className="sub-title">promotional</span>
                                    <h2 className="title white-text">How to Work Suxnix vitamin capsule</h2>
                                </div>
                                <p className="info-one">Vitamin Ipsum is simply dummy text of the printing and tysetting industry. Lorem ipsum has been the industry's standard dummy text ever since the when an unknown.</p>
                                <p className="info-two">printing and tysetting industry. Lorem ipsum has been thindustry's standard dummy text ever since the when an unknown.</p>
                                <a href="shop.html" className="tg-btn">VIEW more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default VideoArea