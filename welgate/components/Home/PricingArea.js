import React from 'react';

function PricingArea() {
  return (
    <div>
      <section style={{
          position: 'relative',width: '100%',height: '400px',backgroundImage: "url('https://www.britannia.co.in/_next/image?url=https%3A%2F%2Fmedia.britannia.co.in%2Fshutterstock_1008530026_1_2_beaeb9bb2d.jpg&w=3840&q=100')",backgroundSize: 'cover' ,backgroundPosition: 'center',
        }}>
        <div style={{ position: 'absolute',
            top: 0,left: 0,width: '100%',height: '100%',backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}/>

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding: '0 20px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              color: 'white',
              fontSize: '51px',
              fontWeight: "800",
              marginBottom: '1rem',
              maxWidth: '800px',
              width: '100%',
            }}
          >
            Rooted in care, growing with purpose
          </h2>
          <p
            style={{
              color: 'white',
              fontSize: '1.2rem',
              maxWidth: '800px',
              width: '100%',
            }}
          >
            At Welgate, we believe that nurturing health and heritage is the foundation for a thriving future.
          </p>
        </div>
      </section>
      <section
      style={{
        backgroundColor: '#FFF7B7', 
        padding: '60px 20px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '800px',margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem',fontWeight: "800", marginBottom: '20px' }}>
          Our Approach
        </h2>
        <p style={{ fontSize: '1.2rem', }}>
At Welgate, we blend legacy with innovation to create lasting impact.
Our journey from entertainment to wellness is rooted in deep community ties and a commitment to sustainability.
We focus on empowering people—whether through cultural connection, conscious consumption, or community-driven growth.
By combining traditional values with forward-thinking practices, we create solutions that are both meaningful and future-ready.        </p>
      </div>
    </section>
    </div>
  );
}

export default PricingArea;
