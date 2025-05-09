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
                <h3 className=' breadcrumbstyle'>Blog</h3>
                <ol className="cd-breadcrumb">
                  <li><a href="/">Home</a></li>
                  <li className="current text-success">Blog</li>
                </ol>
              </nav>
        </section>



      <section id="news" className="blog-post-area-two section-pt-130 section-pb-100">
        <div className="container">
          <div className="row justify-content-center">
            {/* <div className="col-lg-6">
              <div className="section-title section-title-two text-center mb-70">
                <span className="sub-title">
                  <img src="assets/img/icons/sub_left.svg" className="injectable" alt="img"/>
                 <p className='subtitle-colour'>Read blog</p>
                  <img src="assets/img/icons/sub_right.svg" className="injectable" alt="img"/>
                </span>
                <h2 className="title">Read Blog Post</h2>
              </div>
            </div> */}
          </div>
          <div className="row rowalign ">
            {/* Blog Post 1 */}
            <div className="col-lg-6 ">
              <div className="blog-post-item-two">
                <div className="blog-post-thumb-two">
                  <a href="#"><img src="https://img.freepik.com/free-photo/retro-vhs-packaging-high-angle_23-2149854297.jpg?t=st=1746613435~exp=1746617035~hmac=88cafd0a40bdc4512c54b4969cba84e501d48419646517891c6b1441d380e544&w=1380" alt="img"/></a>
                </div>
                <div className="blog-post-content-two" style={{ textAlign: 'justify' }}>
                  <h4 className="title">From Cassettes to Crops – The Unseen Journey of Welgate</h4>
                  <p>
                    Welgate's story didn’t start on a farm—it began in the rhythm of music and the magic of movies. 
                    Back in the days of cassettes and CDs, Welgate was a household name for those seeking joy through 
                    sound and screen. Their stores weren’t just shelves of products—they were places where memories 
                    were made, families bonded over albums, and rare finds brought pure excitement.
                  </p>
                  {!showFullPost1 ? (
                    <button 
                      onClick={() => setShowFullPost1(true)} 
                      className="btn btn-sm  mt-2"
                    >
                      Read More
                    </button>
                  ) :(
                  <>
                    <p>
                      But as the world evolved, so did Welgate’s vision. The focus shifted—from entertaining lives to 
                      enriching them through wellness. With rising concerns around food safety and chemical-laden products, 
                      Welgate asked a bold question: What if we could make clean, healthy food as accessible as we once 
                      made music?
                      This idea took root, quite literally, in the form of Welgate Organic Farms. What began as a small
                      initiative became a movement, one that sought to bring real change to how people live and eat.
                      Today, Welgate stands tall—not only as a brand with a legacy but as a lifestyle rooted in trust,
                      wellness, and care.
                    </p>
                    <button 
                        onClick={() => setShowFullPost1(false)} 
                        className="btn btn-sm btn-outline-danger mt-2"
                      >
                        View Less
                      </button>
                    </>

                  )}
                    

                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="col-lg-6 d-flex">
              <div className="blog-post-item-two ">
                <div className="blog-post-thumb-two">
                  <a href="#"><img src="https://img.freepik.com/free-photo/man-taking-care-his-farm_23-2148580029.jpg?t=st=1746613742~exp=1746617342~hmac=ecce2858ea1806424036f6e5d1fb19cb1aff01f3f3d3a1ed901baab8eeb89eef&w=1060" alt="img"/></a>
                </div>
                <div className="blog-post-content-two" style={{ textAlign: 'justify' }}>
                  <h4 className="title">Why Organic is More Than a Trend – It’s a Welgate Way of Life</h4>
                  <p>
                    Organic isn't just a buzzword—it's a promise. At Welgate, the word "organic" means transparency, 
                    sustainability, and responsibility. Every vegetable harvested and every product stocked in their 
                    supermarket shelves reflects years of learning, adapting, and staying true to a simple principle: 
                    what you consume should nourish you, not harm you.
                    
                  </p>
                  {!showFullPost2 ? (
                    <button 
                      onClick={() => setShowFullPost2(true)} 
                      className="btn btn-sm  mt-2"
                    >
                      Read More
                    </button>
                  ) :(
                  <>
                    <p>
                      Welgate’s organic journey is not about ticking trends—it’s about returning to what’s real. Their 
                      farming practices prioritize natural growth cycles, avoid harmful chemicals, and nurture the soil 
                      just as much as the produce. And it's not just about what’s grown—it's how it's shared. Welgate 
                      ensures that every household has access to food that supports both body and planet.
                      Welgate doesn’t just sell organic; they live it. From packaging choices to in-store experiences,
                      every decision is made with care. At Welgate, organic is a reflection of values—respect for
                      nature, honesty with customers, and a belief in better living.
                    </p>
                    <button 
                        onClick={() => setShowFullPost2(false)} 
                        className="btn btn-sm btn-outline-danger mt-2"
                      >
                        View Less
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row rowalign">
            {/* Blog Post 1 */}
            <div className="col-lg-6 d-flex">
              <div className="blog-post-item-two ">
                <div className="blog-post-thumb-two">
                  <a href="#"><img src="https://img.freepik.com/free-photo/gold-silver-chess-chess-board-game-business-metaphor-leadership-concept_1150-19592.jpg?t=st=1746621359~exp=1746624959~hmac=19df500b9c70ee0ef63a987e70d31f667fd8785e47dc1cb137d35c0ff6f66331&w=1380" alt="img"/></a>
                </div>
                <div className="blog-post-content-two" style={{ textAlign: 'justify' }}>
                  <h4 className="title">How Welgate Turned a Family Brand Into a Wellness Legacy</h4>
                  <p>
                  Welgate’s story is a legacy of family, culture, and wellness. From sharing music in homes to delivering trusted, health-focused products, it has evolved with care, purpose, and integrity. Today, Welgate blends tradition and innovation to nourish every table—creating a future where wellness is a conscious, daily, and accessible choice for all.                    </p>
                  {!showFullPost3 ? (
                    <button 
                      onClick={() => setShowFullPost3(true)} 
                      className="btn btn-sm  mt-2 "
                    >
                      Read More
                    </button>
                  ) :(
                  <>
                    <p>
                    Welgate was once a household name for entertainment. Families visited their stores to find the latest hits, share stories, and connect. But behind that was always something deeper—a desire to bring joy, reliability, and lasting value to people’s lives. As times changed, the same passion was redirected toward a more urgent mission: health and wellness.

Recognizing the impact of processed foods and chemical farming, the next generation of Welgate leaders took bold steps. They began building an ecosystem that started with organic farming and extended to retail spaces that prioritize sustainability. From packaging to policies, every part of the business is now aligned with a healthier, more ethical lifestyle.

Today, Welgate isn’t just about what you buy—it’s about what you believe in. That belief is creating a ripple effect of conscious living.
                    </p>
                    <button 
                        onClick={() => setShowFullPost3(false)} 
                        className="btn btn-sm btn-outline-danger mt-2"
                      >
                        View Less
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="col-lg-6 d-flex">
              <div className="blog-post-item-two">
                <div className="blog-post-thumb-two">
                  <a href="#"><img src="https://content.jdmagicbox.com/v2/comp/thiruvananthapuram/g2/0471px471.x471.221117113259.q2g2/catalogue/welgate-lifestyle-kuruvankonam-thiruvananthapuram-grocery-stores-lmcsvl6glg-250.jpg" alt="img"/></a>
                </div>
                <div className="blog-post-content-two" style={{ textAlign: 'justify' }}>
                  <h4 className="title"> Welgate Organic Supermarkets: Redefining the Way We Shop</h4>
                  <p>
                  Welgate Organic Supermarkets are redefining the shopping experience by turning everyday purchases into conscious choices. Walking into one of our stores means entering a space where health, sustainability, and trust come first. You're not just buying groceries—you're investing in your well-being, supporting your family, and making a positive impact on the planet.                    
                  </p>
                  {!showFullPost4 ? (
                    <button 
                      onClick={() => setShowFullPost4(true)} 
                      className="btn btn-sm  mt-2 "
                    >
                      Read More
                    </button>
                  ) :(
                  <>
                    <p>
                    With shelves full of hand-picked, chemical-free produce and thoughtfully curated products, Welgate Organic Supermarkets are more than stores—they're wellness hubs. Built on a foundation of ethical sourcing and transparency, every item here tells a story: of the soil it came from, the farmers who nurtured it, and the purpose it serves in your life.

Welgate believes shopping should feel personal and empowering. That’s why the layout, staff, and selections are all crafted to create a welcoming, educational space. Whether you're a health-conscious parent, a first-time organic buyer, or a loyal customer, there’s something meaningful waiting for you.

By bringing organic food into neighborhoods, Welgate is making wellness convenient, consistent, and part of everyday life. It's not just about changing what's in your cart—it's about changing what you stand for.
                    </p>
                    <button 
                        onClick={() => setShowFullPost4(false)} 
                        className="btn btn-sm btn-outline-danger mt-2"
                      >
                        View Less
                      </button>
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