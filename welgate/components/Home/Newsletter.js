import React from 'react'

function Newsletter() {
  return (
    <div className='mb-5'>
        <section className="newsletter-area">
                <div className="container">
                    <div className="newsletter-wrap-two">
                        <h2 className="title">Contact Us</h2>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Enter your phone-number"/>
                            <button type="submit" className="btn btn-three">Send</button>
                        </div>
                        {/* <div className="shape">
                            <img src="assets/img/others/newsletter_shape.png" alt="shape"/>
                        </div> */}
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Newsletter