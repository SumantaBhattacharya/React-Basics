import React, { useState } from "react";

function OpenAccount() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 fs-2" style={{ fontWeight: "500" }}>
          Open a Zerodha account
        </h1>
        <p className="mt-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 fs-5 mt-4 mb-5"
          style={{
            width: "20%",
            margin: "0 auto",
            backgroundColor: isHovered ? "#111" : "#387ed1",
            border: "none",
            color: "#fff",
            borderRadius: "5px",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
