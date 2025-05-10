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
          <div className="row justify-content-center"></div>

          <div className="row">
            {/* Blog Post 1 */}
            <div className="col-12 col-md-6 col-lg-3 mb-4 ">
              <div className="card w-100 h-100 flex-column">
                <img src="https://img.freepik.com/free-photo/retro-vhs-packaging-high-angle_23-2149854297.jpg" className="card-img-top" alt="img" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">From Cassettes to Crops – Welgate’s Unseen Brand Journey</h5>
                  <p className="card-text">
                    Welgate's journey began not on a farm, but in the rhythm of music and the magic of movies...
                  </p>
                  {showFullPost1 && (
                    <p className="card-text">
                      But as the world evolved, so did Welgate’s vision. The focus shifted—from entertaining lives to 
                      enriching them through wellness. With rising concerns around food safety and chemical-laden products, 
                      Welgate asked a bold question: What if we could make clean, healthy food as accessible as we once 
                      made music? This idea took root, quite literally, in the form of Welgate Organic Farms. What began 
                      as a small initiative became a movement, one that sought to bring real change to how people live and eat.  
                      Today, Welgate stands tall—not only as a brand with a legacy but as a lifestyle rooted in trust,
                      wellness, and care.
                    </p>
                  )}
                  <div className="mt-auto">
                    <button onClick={() => setShowFullPost1(!showFullPost1)} className="btn btn-sm btn-primary w-100">
                      {showFullPost1 ? 'View Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="col-12 col-md-6 col-lg-3 mb-4 ">
              <div className="card w-100 h-100 flex-column">
                <img src="https://img.freepik.com/free-photo/man-taking-care-his-farm_23-2148580029.jpg" className="card-img-top" alt="img" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Why Organic Is More Than Trend – Welgate’s Lifestyle</h5>
                  <p className="card-text">
                    Organic at Welgate isn’t a trend—it’s a lasting commitment to transparency, sustainability, and...
                  </p>
                  {showFullPost2 && (
                    <p className="card-text">
                      Welgate’s organic journey is not about ticking trends—it’s about returning to what’s real. Their 
                      farming practices prioritize natural growth cycles, avoid harmful chemicals, and nurture the soil 
                      just as much as the produce. And it's not just about what’s grown—it's how it's shared. Welgate 
                      ensures that every household has access to food that supports both body and planet.
                      Welgate doesn’t just sell organic; they live it. From packaging choices to in-store experiences,
                      every decision is made with care. At Welgate, organic is a reflection of values—respect for
                      nature, honesty with customers, and a belief in better living.
                    </p>
                  )}
                  <div className="mt-auto">
                    <button onClick={() => setShowFullPost2(!showFullPost2)} className="btn btn-sm btn-primary w-100">
                      {showFullPost2 ? 'View Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="col-12 col-md-6 col-lg-3 mb-4 ">
              <div className="card w-100 h-100 flex-column">
                <img src="https://img.freepik.com/free-photo/gold-silver-chess-chess-board-game-business-metaphor-leadership-concept_1150-19592.jpg" className="card-img-top" alt="img" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">How Welgate Became a Family Wellness Legacy Brand</h5>
                  <p className="card-text">
                    Welgate’s story is a legacy of family, culture, and wellness. From sharing music in homes to...
                  </p>
                  {showFullPost3 && (
                    <p className="card-text">
                      Welgate was once a household name for entertainment. Families visited their stores to find the latest hits, share stories, and connect. But behind that was always something deeper—a desire to bring joy, reliability, and lasting value to people’s lives. As times changed, the same passion was redirected toward a more urgent mission: health and wellness.

                      Recognizing the impact of processed foods and chemical farming, the next generation of Welgate leaders took bold steps. They began building an ecosystem that started with organic farming and extended to retail spaces that prioritize sustainability. From packaging to policies, every part of the business is now aligned with a healthier, more ethical lifestyle.

                      Today, Welgate isn’t just about what you buy—it’s about what you believe in. That belief is creating a ripple effect of conscious living.
                    </p>
                  )}
                  <div className="mt-auto">
                    <button onClick={() => setShowFullPost3(!showFullPost3)} className="btn btn-sm btn-primary w-100">
                      {showFullPost3 ? 'View Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="col-12 col-md-6 col-lg-3 mb-4 ">
              <div className="card w-100 h-100 flex-column">
                <img src="https://content.jdmagicbox.com/v2/comp/thiruvananthapuram/g2/0471px471.x471.221117113259.q2g2/catalogue/welgate-lifestyle-kuruvankonam-thiruvananthapuram-grocery-stores-lmcsvl6glg-250.jpg" className="card-img-top" alt="img" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Welgate Organic Supermarkets – Changing How We All Shop</h5>
                  <p className="card-text">
                    Welgate Organic Supermarkets are redefining the shopping experience by turning everyday...
                  </p>
                  {showFullPost4 && (
                    <p className="card-text">
                      With shelves full of hand-picked, chemical-free produce and thoughtfully curated products, Welgate Organic Supermarkets are more than stores—they're wellness hubs. Built on a foundation of ethical sourcing and transparency, every item here tells a story: of the soil it came from, the farmers who nurtured it, and the purpose it serves in your life.

                      Welgate believes shopping should feel personal and empowering. That’s why the layout, staff, and selections are all crafted to create a welcoming, educational space. Whether you're a health-conscious parent, a first-time organic buyer, or a loyal customer, there’s something meaningful waiting for you.

                      By bringing organic food into neighborhoods, Welgate is making wellness convenient, consistent, and part of everyday life. It's not just about changing what's in your cart—it's about changing what you stand for.
                    </p>
                  )}
                  <div className="mt-auto">
                    <button onClick={() => setShowFullPost4(!showFullPost4)} className="btn btn-sm btn-primary w-100">
                      {showFullPost4 ? 'View Less' : 'Read More'}
                    </button>
                  </div>
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
