import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Main Heading Section */}
      <div className="row p-3 p-md-5 mt-3 mt-md-5 mb-3 mb-md-5">
        <div className="col-12">
          <h1 className="text-center" style={{ 
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            lineHeight: "1.4"
          }}>
            We pioneered the discount broking model in India
            <br className="d-none d-md-block" />
            <span className="d-md-none"> </span>
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>

      {/* Two Column Content Section */}
      <div
        className="row p-3 p-md-5 mt-3 mt-md-5 border-top text-muted"
        style={{ lineHeight: "1.8" }}
      >
        {/* Left Column */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <p style={{ 
            fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
            marginBottom: "clamp(1rem, 2vw, 1.5rem)"
          }}>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p style={{ 
            fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
            marginBottom: "clamp(1rem, 2vw, 1.5rem)"
          }}>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p style={{ 
            fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)"
          }}>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        
        {/* Right Column */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <p style={{ 
            fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
            marginBottom: "clamp(1rem, 2vw, 1.5rem)"
          }}>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p style={{ 
            fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
            marginBottom: "clamp(1rem, 2vw, 1.5rem)"
          }}>
            {/* external link */}
            <a 
              href="/rainmatter" 
              style={{ 
                textDecoration: "none",
                color: "#387ED1",
                fontWeight: "500"
              }}
            >
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p style={{ 
            fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)"
          }}>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;