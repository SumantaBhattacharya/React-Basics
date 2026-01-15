import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mt-3 mt-md-5 text-center border-top">
        <div className="col-12 col-md-8 p-3 p-md-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 fs-md-4">Brokerage calculator</h3>
          </a>
          <ul
            style={{ 
              textAlign: "left", 
              lineHeight: "1.6", 
              fontSize: "clamp(11px, 2vw, 14px)",
              paddingLeft: "clamp(1rem, 3vw, 1.5rem)"
            }}
            className="text-muted mt-3"
          >
            <li className="mb-2 mb-md-3">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li className="mb-2 mb-md-3">
              Digital contract notes will be sent via e-mail.
            </li>
            <li className="mb-2 mb-md-3">
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li className="mb-2 mb-md-3">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li className="mb-2 mb-md-3">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li className="mb-2 mb-md-3">
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4 p-3 p-md-4 d-flex flex-column justify-content-center align-items-center border-start border-top border-md-top-0 border-start-md-0">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 fs-md-4 mb-3">List of charges</h3>
          </a>
          <p className="text-muted d-none d-md-block" style={{ fontSize: "clamp(12px, 1.8vw, 14px)" }}>
            View detailed list of all applicable charges
          </p>
          <button 
            className="btn btn-outline-primary mt-2 d-md-none"
            style={{
              fontSize: "12px",
              padding: "5px 15px"
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;