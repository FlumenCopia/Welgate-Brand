import React from 'react'

function HomeSlick() {
  return (
    <div className="container-fluid attractions py-5">
            <div className="container attractions-section py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                    {/* <h4 className="text-primary">The Journey Unfolds</h4> */}
                    <h1 className=" title  hollow-text  mb-4">The Journey Unfolds</h1>
                    <p className="text-white mb-0" >Welgate began by making music and movies accessible through popular CD stores that connected people. Building on this success, the company recognized the importance of pure, chemical-free food. Driven by a commitment to health and sustainability, Welgate expanded into organic farming to promote natural and ethical eating.</p>
                </div>
                <div className="owl-carousel attractions-carousel" >
                    <div className="attractions-item " >
                        <img src="/assets/img/WhatsApp Image 1.jpg" className="img-fluid rounded w-100" alt=""/>
                        <a href="#" className="attractions-name">journey starts</a>
                    </div>
                    <div className="attractions-item " >
                        <img src="/assets/img/WhatsApp Image 2.jpg" className="img-fluid rounded w-100" alt=""/>
                        <a href="#" className="attractions-name">journey starts</a>
                    </div>
                    <div className="attractions-item " >
                        <img src="/assets/img/WhatsApp Image 3.jpg" className="img-fluid rounded w-100" alt=""/>
                        <a href="#" className="attractions-name">journey starts</a>
                    </div>
                    <div className="attractions-item " >
                        <img src="/assets/img/WhatsApp Image 1.jpg" className="img-fluid rounded w-100" alt=""/>
                        <a href="#" className="attractions-name">journey starts</a>
                    </div>
                    <div className="attractions-item " >
                        <img src="/assets/img/WhatsApp Image 2025-05-12 at 12.49.53_cb885fea.jpg" className="img-fluid rounded w-100" alt=""/>
                        <a href="#" className="attractions-name">journey starts</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HomeSlick