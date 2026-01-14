import React from "react";  
  
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img    
            src="/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className="nav-link active" 
                aria-current="page" 
                to="/signup"
                style={{ textDecoration: 'none' }}
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/about"
                style={{ textDecoration: 'none' }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/products"
                style={{ textDecoration: 'none' }}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/pricing"
                style={{ textDecoration: 'none' }}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/support"
                style={{ textDecoration: 'none' }}
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;