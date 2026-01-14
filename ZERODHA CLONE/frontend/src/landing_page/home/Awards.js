import React from "react";

// imr, ffc

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        
        {/* Image Section */}
        <div className="col-12 col-md-6 p-3 p-md-5 text-center">
          <img
            src="/Images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-0">
          <h3>Largest stock broket in India</h3>

          <p className="mb-4 text-muted">
            2+ milion Zerodha clients contribute to over 15% of all retail order
            volumes in india daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-12 col-sm-6">
              <ul>
                <li>
                  <p className="text-muted">Features and Options</p>
                </li>
                <li>
                  <p className="text-muted">Commodity derivatives</p>
                </li>
                <li>
                  <p className="text-muted">Currency derivatives</p>
                </li>
              </ul>
            </div>

            <div className="col-12 col-sm-6">
              <ul>
                <li>
                  <p className="text-muted">Stocks & IPO's</p>
                </li>
                <li>
                  <p className="text-muted">Direct mutual funds</p>
                </li>
                <li>
                  <p className="text-muted">Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>

          <img
            style={{ width: "90%" }}
            src="/Images/pressLogos.png"
            alt="Press Logos"
            className="img-fluid mt-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
