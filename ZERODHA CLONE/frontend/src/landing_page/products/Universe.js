import React from "react";

function Universe() {
  // Partner data array
  const partnerData = [
    {
      id: 1,
      logo: "https://zerodha.com/static/images/partners/zerodhafundhouse.png",
      alt: "Zerodha Fundhouse",
      description: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
    },
    {
      id: 2,
      logo: "https://zerodha.com/static/images/products/sensibull-logo.svg",
      alt: "Sensibull",
      description: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
    },
    {
      id: 3,
      logo: "/images/smallcaseLogo.png",
      alt: "Smallcase",
      description: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
    },
    {
      id: 4,
      logo: "https://zerodha.com/static/images/partners/tijori.svg",
      alt: "Tijori",
      description: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
    },
    {
      id: 5,
      logo: "https://zerodha.com/static/images/products/streak-logo.png",
      alt: "Streak",
      description: "Systematic trading platform that allows you to create and backtest strategies without coding."
    },
    {
      id: 6,
      logo: "https://zerodha.com/static/images/products/ditto-logo.png",
      alt: "Ditto",
      description: "Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free."
    }
  ];

  return (
    <div className="container mt-3 mt-md-5">
      <div className="row text-center">
        {/* Header Section */}
        <div className="col-12">
          <h1 className="mb-3 mb-md-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
            The Zerodha Universe
          </h1>
          <p className="mb-4 mb-md-5" style={{fontSize: "clamp(1rem, 2vw, 1.2rem)", maxWidth: "800px",margin: "0 auto",lineHeight: "1.6"}}>
            Extend your trading and investment experience even further with ourpartner platforms
          </p>
        </div>

        {/* Partner Cards - Using .map() */}
        <div className="row justify-content-center">
          {partnerData.map((partner) => (
            <div key={partner.id} className="col-12 col-sm-6 col-md-4 col-lg-4 p-3 mt-3 mt-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-4" style={{height: "60px",display: "flex",alignItems: "center",justifyContent: "center" }}>
                    <img src={partner.logo} alt={partner.alt} className="img-fluid"style={{ maxHeight: "50px", maxWidth: "100%" }}
                    />
                  </div>
                  <p className="text-muted mb-0" style={{ fontSize: "clamp(0.85rem, 1.6vw, 0.95rem)" }}>
                    {partner.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Signup Button */}
        <div className="col-12 d-flex justify-content-center mt-4 mt-md-5 mb-4 mb-md-5">
          <button className="btn btn-primary py-2 py-md-3 px-4 px-md-5" style={{fontSize: "clamp(16px, 1.8vw, 20px)",fontWeight: "500",whiteSpace: "nowrap",borderRadius: "5px"}}>
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;