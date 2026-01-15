import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mt-5 border-bottom text-center">
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>
      
      <div className="row p-2 p-md-5 mt-2 mt-md-5 text-center">
        {/* Equity Section - Full width on mobile, 1/3 width on desktop */}
        <div className="col-lg-4 col-md-12 p-4">
          <img src="/images/pricingEquity.svg" style={{ width: "70%", maxWidth: "250px" }} alt="Free equity" />
          <h1 className="fs-3 mt-4">Free equity delivery</h1>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        {/* Intraday Section */}
        <div className="col-lg-4 col-md-12 p-4">
          <img src="/images/intradayTrades.svg" style={{ width: "70%", maxWidth: "250px" }} alt="Intraday trades" />
          <h1 className="fs-3 mt-4">Intraday and F&O trades</h1>
          <p className="text-muted mt-3">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        {/* Mutual Fund Section */}
        <div className="col-lg-4 col-md-12 p-4">
          <img src="/images/pricingEquity.svg" style={{ width: "70%", maxWidth: "250px" }} alt="Free MF" />
          <h1 className="fs-3 mt-4">Free direct MF</h1>
          <p className="text-muted mt-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;