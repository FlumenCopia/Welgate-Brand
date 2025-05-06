import React from 'react'

function Newsletter() {
  return (
    <div>
        <section className="newsletter-area">
                <div className="container">
                    <div className="newsletter-wrap-two">
                        <h2 className="title">Subscribe newsletter</h2>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Enter your mail"/>
                            <button type="submit" className="btn btn-three">Subscribe</button>
                        </div>
                        <div className="shape">
                            <img src="assets/img/others/newsletter_shape.png" alt="shape"/>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Newsletter