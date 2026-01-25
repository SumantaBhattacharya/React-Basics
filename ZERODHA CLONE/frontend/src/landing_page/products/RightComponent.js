import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Text Content - Order changes on mobile */}
        <div className="col-12 col-md-6 p-3 p-md-5 mt-0 mt-md-5 order-2 order-md-1">
          <h1 style={{fontSize: "clamp(1.5rem, 3vw, 2.5rem)",lineHeight: "1.2",marginBottom: "clamp(0.75rem, 1.5vw, 1.5rem)"}}>
            {productName}
          </h1>
          <p style={{fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",lineHeight: "1.6",marginBottom: "clamp(1rem, 2vw, 2rem)"}}>
            {productDesription}
          </p>
          <div>
            <a href={learnMore} style={{fontSize: "clamp(0.9rem, 1.2vw, 1rem)",textDecoration: "none",fontWeight: "500",display: "inline-flex",alignItems: "center",gap: "8px"}}>
              Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        
        {/* Image - Order changes on mobile */}
        <div className="col-12 col-md-6 order-1 order-md-2">
          <img src={imageURL} alt={productName} style={{width: "100%",height: "auto",maxHeight: "clamp(250px, 40vw, 400px)",objectFit: "contain"}}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;