import React from 'react'

function Faq() {
  return (
    <div>
         <section className="faq-area position-relative">
                <div className="row justify-content-end g-0">
                    <div className="faq-img" data-background="assets/img/others/faq_img.jpg">
                        <a href="https://www.youtube.com/watch?v=ZbwnU1Rp7aY" className="popup-video"><i className="fa fa-play"></i></a>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-wrapper-two">
                            <div className="section-title section-title-two white-title mb-40">
                                <span className="sub-title">
                                    <img src="assets/img/icons/sub_left.svg" className="injectable" alt="img"/>
                                    faq
                                    <img src="assets/img/icons/sub_right.svg" className="injectable" alt="img"/>
                                </span>
                                <h2 className="title">Ask question</h2>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What is world of spirits and cocktail ?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>One of the best designers that turns the client pain points and requests into magnificent designs. Aware of all the aspect that should be considered</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            VidMate app is a powerful application ?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>One of the best designers that turns the client pain points and requests into magnificent designs. Aware of all the aspect that should be considered</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Free Ingredients provides a searchable and abortion ?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>One of the best designers that turns the client pain points and requests into magnificent designs. Aware of all the aspect that should be considered</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            How does the 30-day free software trial work?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>One of the best designers that turns the client pain points and requests into magnificent designs. Aware of all the aspect that should be considered</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Latest version through Vidmate powerful ?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>One of the best designers that turns the client pain points and requests into magnificent designs. Aware of all the aspect that should be considered</p>
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