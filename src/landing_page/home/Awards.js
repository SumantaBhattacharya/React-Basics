import React from "react";
// imr, ffc
function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="/Images/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h3>Largest stock broket in India</h3>
          <p className="mb-5 text-muted">
            2+ milion Zerodha clients contribute to over 15% of all retail order
            volumes in india daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li >
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
            <div className="col-6">
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
          <img style={{width: "90%"}} src="Images\pressLogos.png" alt="" />
        </div>
        
      </div>
    </div>
  );
}

export default Awards;
