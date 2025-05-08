import React from 'react'

function Faq() {
  return (
    <div>
         <section className="faq-area position-relative">
                <div className="row justify-content-end g-0">
                    <div className="faq-img" data-background="assets/img/others/faq_img.jpg">
                        {/* <a href="" className=""><i className=""></i></a> */}
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-wrapper-two ">
                            <div className="section-title section-title-two white-title mb-40">
                                <span className="sub-title">
                                    <img src="assets/img/icons/sub_left.svg" className="injectable" alt="img"/>
                                    <p className='subtitle-colour'>FAQ</p>
                                    <img src="assets/img/icons/sub_right.svg" className="injectable" alt="img"/>
                                </span>
                                <h2 className="title">Ask question</h2>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How did Welgate originally start?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Welgate began its journey in the entertainment industry during the cassette and CD revolution, making music and movies accessible to every household. Our CD stores were popular hubs for families and collectors alike.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Why did Welgate shift from entertainment to organic living?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Our shift was driven by a deep realization: just as we once brought joy through entertainment, we could now enrich lives through health and wellness. This inspired our transition to organic farming and sustainable living.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What is the core philosophy behind the Welgate brand?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Welgate stands for trust, purity, and lifestyle transformation. Whether in music or organic food, our focus has always been on connecting people with meaningful experiences that improve quality of life.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        What makes Welgate’s legacy unique in today’s market?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Unlike many startups, Welgate has decades of customer connection—first through entertainment, now through health. Our journey reflects evolution with purpose, grounded in passion and long-term vision.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Is the next generation still involved in Welgate?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Yes. The next generation is now leading the brand into global markets, while staying true to our roots—committed to purity, innovation, and carrying forward the legacy of conscious living.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Faq