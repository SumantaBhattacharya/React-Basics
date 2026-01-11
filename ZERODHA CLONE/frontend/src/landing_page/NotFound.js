import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container" style={{ marginTop: "100px", marginBottom: "100px" }}>
      <div className="row align-items-center">
        {/* Left Side: Text Content */}
        <div className="col-lg-6 col-md-12 text-center text-md-start">
          <p className="text-muted mb-4" style={{ fontSize: "1.1rem" }}>
            404
          </p>
          <h1 className="mb-3" style={{ fontWeight: "500", color: "#444" }}>
            Kiaan couldn’t find that page
          </h1>
          <p className="text-muted fs-5">
            We couldn’t find the page you were looking for. <br />
            Visit <Link to="/" style={{ textDecoration: "none", color: "#387ed1" }}>Zerodha’s home page</Link>
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="col-lg-6 col-md-12 text-center">
          <img
            src="https://zerodha.com/static/images/kiaan404.jpg"
            alt="Kiaan 404"
            className="img-fluid"
            style={{ maxWidth: "450px", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;