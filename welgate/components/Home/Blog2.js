"use client"
import React, { useState } from 'react';

function Blog2() {
  const [showFullPost1, setShowFullPost1] = useState(false);
  const [showFullPost2, setShowFullPost2] = useState(false);

  return (
    <div>
      <section id="news" className="blog-post-area-two section-pt-130 section-pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title section-title-two text-center mb-70">
                <span className="sub-title">
                  <img src="assets/img/icons/sub_left.svg" className="injectable" alt="img"/>
                 <p className='subtitle-colour'>Read blog</p>
                  <img src="assets/img/icons/sub_right.svg" className="injectable" alt="img"/>
                </span>
                <h2 className="title">Read Blog Post</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Blog Post 1 */}
            <div className="col-lg-6">
              <div className="blog-post-item-two">
                <div className="blog-post-thumb-two">
                  <a href="#"><img src="https://img.freepik.com/free-photo/retro-vhs-packaging-high-angle_23-2149854297.jpg?t=st=1746613435~exp=1746617035~hmac=88cafd0a40bdc4512c54b4969cba84e501d48419646517891c6b1441d380e544&w=1380" alt="img"/></a>
                </div>
                <div className="blog-post-content-two" style={{ textAlign: 'justify' }}>
                  <h2 className="title"><a href="#">From Cassettes to Crops – The Unseen Journey of Welgate</a></h2>
                  <p>
                    Welgate's story didn’t start on a farm—it began in the rhythm of music and the magic of movies. 
                    Back in the days of cassettes and CDs, Welgate was a household name for those seeking joy through 
                    sound and screen. Their stores weren’t just shelves of products—they were places where memories 
                    were made, families bonded over favorite albums, and rare finds brought pure excitement.
                  </p>
                  {!showFullPost1 && (
                    <button 
                      onClick={() => setShowFullPost1(true)} 
                      className="btn btn-sm btn-outline-primary mt-2"
                    >
                      Read More
                    </button>
                  )}
                  {showFullPost1 && (
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
                  )}
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="col-lg-6">
              <div className="blog-post-item-two">
                <div className="blog-post-thumb-two">
                  <a href="#"><img src="https://img.freepik.com/free-photo/man-taking-care-his-farm_23-2148580029.jpg?t=st=1746613742~exp=1746617342~hmac=ecce2858ea1806424036f6e5d1fb19cb1aff01f3f3d3a1ed901baab8eeb89eef&w=1060" alt="img"/></a>
                </div>
                <div className="blog-post-content-two" style={{ textAlign: 'justify' }}>
                  <h2 className="title"><a href="#">Why Organic is More Than a Trend – It’s a Welgate Way of Life</a></h2>
                  <p>
                    Organic isn't just a buzzword—it's a promise. At Welgate, the word "organic" means transparency, 
                    sustainability, and responsibility. Every vegetable harvested and every product stocked in their 
                    supermarket shelves reflects years of learning, adapting, and staying true to a simple principle: 
                    what you consume should nourish you, not harm you.
                    
                  </p>
                  {!showFullPost2 && (
                    <button 
                      onClick={() => setShowFullPost2(true)} 
                      className="btn btn-sm btn-outline-primary mt-2"
                    >
                      Read More
                    </button>
                  )}
                  {showFullPost2 && (
                    <p>
                      Welgate’s organic journey is not about ticking trends—it’s about returning to what’s real. Their 
                      farming practices prioritize natural growth cycles, avoid harmful chemicals, and nurture the soil 
                      just as much as the produce. And it's not just about what’s grown—it's how it's shared. Welgate 
                      ensures that every household has access to food that supports both body and planet.
                      Welgate doesn’t just sell organic; they live it. From packaging choices to in-store experiences,
                      every decision is made with care. At Welgate, organic is a reflection of values—respect for
                      nature, honesty with customers, and a belief in better living.
                    </p>
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