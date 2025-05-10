"use client"
import React, { useState } from 'react';

function Blog2() {
  const [showFullPost1, setShowFullPost1] = useState(false);
  const [showFullPost2, setShowFullPost2] = useState(false);
  const [showFullPost3, setShowFullPost3] = useState(false);
  const [showFullPost4, setShowFullPost4] = useState(false);

  return (
    <div>
      <section className="breadcrumbbanner">
        <nav className="container breadcrumb-container">
          <h3 className='breadcrumbstyle'>Blog</h3>
          <ol className="cd-breadcrumb">
            <li><a href="/">Home</a></li>
            <li className="current text-success">Blog</li>
          </ol>
        </nav>
      </section>

      <section id="news" className="blog-post-area-two section-pt-130 section-pb-100">
        <div className="container">
          <div className="row justify-content-center">
            {/* Optional Section Title */}
          </div>

          <div className="row">
            {/* Blog Post 1 */}
            <div className="col-12 col-md-6 col-lg-3 blog-custom-col mb-4">
              <div className="blog-post-item-two">
                <div className="blog-post-thumb-two">
                  <a href="#"><img src="https://img.freepik.com/free-photo/retro-vhs-packaging-high-angle_23-2149854297.jpg" alt="img"/></a>
                </div>
                <div className="blog-post-content-two" >
                  <div className="bloght">
                  <p className="title mt-3">From Cassettes to Crops – Welgate’s Unseen Brand Journey</p>
                  <p>
                    Welgate's journey began not on a farm, but in the rhythm of music and the magic of movies. Once known for cassettes and CDs, their stores were places where families bonded, memories formed, and rare finds sparked joy.
                  </p>
                  </div>
                  
                  {!showFullPost1 ? (
                    
                    <button onClick={() => setShowFullPost1(true)} className="btn btn-sm mt-2">Read More</button>
                  ) : (
                    <>
                                        <div className="bloght2">

                      <p>
                        But as the world evolved, so did Welgate’s vision. The focus shifted—from entertaining lives to 
                        enriching them through wellness. With rising concerns around food safety and chemical-laden products, 
                        Welgate asked a bold question: What if we could make clean, healthy food as accessible as we once 
                        made music? This idea took root, quite literally, in the form of Welgate Organic Farms. What began 
                        as a small initiative became a movement, one that sought to bring real change to how people live and eat.  
                        Today, Welgate stands tall—not only as a brand with a legacy but as a lifestyle rooted in trust,
                        wellness, and care.
                      </p>
                                        </div>
                      <button onClick={() => setShowFullPost1(false)} className="btn btn-sm btn-outline-danger mt-2">View Less</button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="col-12 col-md-6 col-lg-3 blog-custom-col mb-4 ">
              <div className="blog-post-item-two ">
                <div className="blog-post-thumb-two">
                  <a href="#"><img src="https://img.freepik.com/free-photo/man-taking-care-his-farm_23-2148580029.jpg" alt="img"/></a>
                </div>
                <div className="blog-post-content-two" >
                                    <div className="bloght">

                  <p className="title mt-3">Why Organic Is More Than Trend – Welgate’s Lifestyle</p>
                  <p>
Organic at Welgate isn’t a trend—it’s a lasting commitment to transparency, sustainability, and social responsibility. Every product on their shelves reflects years of learning, careful sourcing, and a sincere promise to nourish, not harm.
                  </p>
                </div>
                  {!showFullPost2 ? (
                    <button onClick={() => setShowFullPost2(true)} className="btn btn-sm mt-2">Read More</button>
                  ) : (
                    <>
                                        <div className="bloght2">

                      <p>
                        Welgate’s organic journey is not about ticking trends—it’s about returning to what’s real. Their 
                        farming practices prioritize natural growth cycles, avoid harmful chemicals, and nurture the soil 
                        just as much as the produce. And it's not just about what’s grown—it's how it's shared. Welgate 
                        ensures that every household has access to food that supports both body and planet.
                        Welgate doesn’t just sell organic; they live it. From packaging choices to in-store experiences,
                        every decision is made with care. At Welgate, organic is a reflection of values—respect for
                        nature, honesty with customers, and a belief in better living.
                      </p>
                                        </div>
                      <button onClick={() => setShowFullPost2(false)} className="btn btn-sm btn-outline-danger mt-2">View Less</button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="col-12 col-md-6 col-lg-3 blog-custom-col mb-4">
              <div className="blog-post-item-two">
                <div className="blog-post-thumb-two">
                  <a href="#"><img src="https://img.freepik.com/free-photo/gold-silver-chess-chess-board-game-business-metaphor-leadership-concept_1150-19592.jpg" alt="img"/></a>
                </div>
                <div className="blog-post-content-two" >
                                    <div className="bloght">

                  <p className="title mt-3">How Welgate Became a Family Wellness Legacy Brand</p>
                  <p>
Welgate’s story is a legacy of family, culture, and wellness. From sharing music in homes to delivering trusted, health-focused products, it has evolved with care, purpose, integrity, passion, and community spirit.                  </p>
                  </div>
                  {!showFullPost3 ? (
                    <button onClick={() => setShowFullPost3(true)} className="btn btn-sm mt-2">Read More</button>
                  ) : (
                    <>
                                        <div className="bloght2">

                      <p>
                        Welgate was once a household name for entertainment. Families visited their stores to find the latest hits, share stories, and connect. But behind that was always something deeper—a desire to bring joy, reliability, and lasting value to people’s lives. As times changed, the same passion was redirected toward a more urgent mission: health and wellness.

                        Recognizing the impact of processed foods and chemical farming, the next generation of Welgate leaders took bold steps. They began building an ecosystem that started with organic farming and extended to retail spaces that prioritize sustainability. From packaging to policies, every part of the business is now aligned with a healthier, more ethical lifestyle.

                        Today, Welgate isn’t just about what you buy—it’s about what you believe in. That belief is creating a ripple effect of conscious living.
                      </p>
                      </div>
                      <button onClick={() => setShowFullPost3(false)} className="btn btn-sm btn-outline-danger mt-2">View Less</button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="col-12 col-md-6 col-lg-3 blog-custom-col mb-4">
              <div className="blog-post-item-two">
                <div className="blog-post-thumb-two">
                  <a href="#"><img src="https://content.jdmagicbox.com/v2/comp/thiruvananthapuram/g2/0471px471.x471.221117113259.q2g2/catalogue/welgate-lifestyle-kuruvankonam-thiruvananthapuram-grocery-stores-lmcsvl6glg-250.jpg" alt="img"/></a>
                </div>
                <div className="blog-post-content-two">
                                    <div className="bloght">

                  <p className="title mt-3">Welgate Organic Supermarkets – Changing How We All Shop</p>
                  <p>
                    Welgate Organic Supermarkets are redefining the shopping experience by turning everyday purchases into conscious choices. Walking into one of our stores means entering a space where health, sustainability, and trust come first.
                  </p>
                  </div>
                  {!showFullPost4 ? (
                    <button onClick={() => setShowFullPost4(true)} className="btn btn-sm mt-2">Read More</button>
                  ) : (
                    <>
                    <div className="bloght2">
                      <p>
                        With shelves full of hand-picked, chemical-free produce and thoughtfully curated products, Welgate Organic Supermarkets are more than stores—they're wellness hubs. Built on a foundation of ethical sourcing and transparency, every item here tells a story: of the soil it came from, the farmers who nurtured it, and the purpose it serves in your life.

                        Welgate believes shopping should feel personal and empowering. That’s why the layout, staff, and selections are all crafted to create a welcoming, educational space. Whether you're a health-conscious parent, a first-time organic buyer, or a loyal customer, there’s something meaningful waiting for you.

                        By bringing organic food into neighborhoods, Welgate is making wellness convenient, consistent, and part of everyday life. It's not just about changing what's in your cart—it's about changing what you stand for.
                      </p>
                    </div>
                      
                      <button onClick={() => setShowFullPost4(false)} className="btn btn-sm btn-outline-danger mt-2">View Less</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog2;
