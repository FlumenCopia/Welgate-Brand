import React from 'react'

function ShopArea() {
  return (
    <div class="container-fluid attractions py-5">
            <div class="container attractions-section py-5">
                <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                    {/* <h4 class="text-primary">The Journey Unfolds</h4> */}
                    <h1 class=" title  hollow-text  mb-4">The Journey Unfolds</h1>
                    <p class="text-white mb-0">Welgate began by making music and movies accessible through popular CD stores that connected people. Building on this success, the company recognized the importance of pure, chemical-free food. Driven by a commitment to health and sustainability, Welgate expanded into organic farming to promote natural and ethical eating.</p>
                </div>
                <div class="owl-carousel attractions-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <div class="attractions-item wow fadeInUp" data-wow-delay="0.2s">
                        <img src="/assets/img/WhatsApp Image 1.jpg" class="img-fluid rounded w-100" alt=""/>
                        <a href="#" class="attractions-name">journey starts</a>
                    </div>
                    <div class="attractions-item wow fadeInUp" data-wow-delay="0.4s">
                        <img src="/assets/img/WhatsApp Image 2.jpg" class="img-fluid rounded w-100" alt=""/>
                        <a href="#" class="attractions-name">journey starts</a>
                    </div>
                    <div class="attractions-item wow fadeInUp" data-wow-delay="0.6s">
                        <img src="/assets/img/WhatsApp Image 3.jpg" class="img-fluid rounded w-100" alt=""/>
                        <a href="#" class="attractions-name">journey starts</a>
                    </div>
                    <div class="attractions-item wow fadeInUp" data-wow-delay="0.8s">
                        <img src="/assets/img/WhatsApp Image 1.jpg" class="img-fluid rounded w-100" alt=""/>
                        <a href="#" class="attractions-name">journey starts</a>
                    </div>
                    <div class="attractions-item wow fadeInUp" data-wow-delay="1s">
                        <img src="/assets/img/WhatsApp Image 2025-05-12 at 12.49.53_cb885fea.jpg" class="img-fluid rounded w-100" alt=""/>
                        <a href="#" class="attractions-name">journey starts</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ShopArea