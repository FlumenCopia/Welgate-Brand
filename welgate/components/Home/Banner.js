import React from 'react'

function Banner() {
  return (
    <div>
         <section class="tg-banner-area banner-bg jarallax parallax-img">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-xl-6 col-lg-6 order-0 order-lg-2">
                            <div class="tg-banner-img text-center wow fadeInRight" data-wow-delay=".6s">
                                <img src="assets/img/banner/banner_img.png" alt="img"/>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-10">
                            <div class="tg-banner-content">
                                <h4 class="sub-title wow fadeInUp" data-wow-delay=".2s">Increased Energy!</h4>
                                <h2 class="title wow fadeInUp" data-wow-delay=".4s">Mix Protein Way <br/> To Growth</h2>
                                <p class=" wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of lorem ipsum majority have suffered alteration in some.</p>
                                <div class="tg-banner-btn wow fadeInUp" data-wow-delay=".8s">
                                    <a href="shop-details.html" class="tg-btn">purchase now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Banner