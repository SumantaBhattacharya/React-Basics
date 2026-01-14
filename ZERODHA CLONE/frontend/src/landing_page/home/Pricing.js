import React from 'react';

function Pricing() {
    return ( 
        <div>
            <div className='container mt-3 mt-md-5 mb-3 mb-md-5'>
                <div className='row align-items-center'>
                    {/* Left Column - Text Content */}
                    <div className='col-12 col-md-4 order-2 order-md-1'>
                        <h1 className='mb-2 mb-md-3' style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
                            Unbeatable pricing
                        </h1>
                        <p className="text-muted mb-3 mb-md-4" style={{ fontSize: "clamp(0.9rem, 1.8vw, 1rem)", lineHeight: "1.6" }}>
                            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                        </p>
                        <a 
                            href="/pricing" 
                            style={{
                                textDecoration: "none", 
                                fontSize: "clamp(14px, 1.2vw, 16px)", 
                                fontWeight: "500",
                                color: "#387ED1"
                            }}
                        >
                            See pricing  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                    
                    {/* Spacer - Hidden on mobile, visible on desktop */}
                    <div className='col-md-2 d-none d-md-block order-md-2'></div>
                    
                    {/* Right Column - Pricing Boxes */}
                    <div className='col-12 col-md-6 order-1 order-md-3 mb-4 mb-md-0'>
                        <div className='row text-center'>
                            {/* First Pricing Box */}
                            <div className='col-12 col-sm-6 mb-3 mb-sm-0'>
                                <div className='border p-3 p-md-4 h-100' style={{ borderRadius: "8px" }}>
                                    <h1 className='mb-3 mb-md-4' style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
                                        ₹0
                                    </h1>
                                    <p className="text-muted mb-0" style={{ fontSize: "clamp(0.85rem, 1.6vw, 0.95rem)" }}>
                                        Free equity delivery and <br /> direct mutual funds
                                    </p>
                                </div>
                            </div>
                            
                            {/* Second Pricing Box */}
                            <div className='col-12 col-sm-6'>
                                <div className='border p-3 p-md-4 h-100' style={{ borderRadius: "8px" }}>
                                    <h1 className='mb-3 mb-md-4' style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
                                        ₹20
                                    </h1>
                                    <p className="text-muted mb-0" style={{ fontSize: "clamp(0.85rem, 1.6vw, 0.95rem)" }}>
                                        Intraday and F&O trades
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;