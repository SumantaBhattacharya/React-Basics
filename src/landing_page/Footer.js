import React, { useState } from "react";

function Footer() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const linkStyle = (index) => ({
    textDecoration: "none",
    color: hoverIndex === index ? "blue" : "#111",
    fontWeight: "600",
    fontSize: "1rem",
    display: "block",
    marginBottom: "5px",
    transition: "color 0.3s ease-in-out",
  });

  const companyLinks = [
    "About", "Products", "Pricing", "Referral programme",
    "Careers", "Zerodha.tech", "Press & media", "Zerodha cares (CSR)"
  ];
  const supportLinks = [
    "Contact", "Support portal", "Z-Connect blog", "List of charges", "Downloads & resources"
  ];
  const accountLinks = ["Open an account", "Fund transfer", "60 day challenge"];

  return (
    <div id="footer" className="w-100 border-top mt-5"
     style={{backgroundColor: "#FBFBFB",
        padding: "30px 10%",
        marginLeft: "auto", 
        marginRight: "auto",
        
    }}>
      <div className="row">
        <div className="col">
          <img src="images/logo.svg" alt="logo.svg" style={{ width: "50%" }} />
          <p className="mt-3 fs-6">&copy; 2010 - 2024, Not Zerodha Broking Ltd.
            <br /> All rights reserved.</p>
        </div>

        <div className="col">
          <p style={{fontWeight: 600}} className="fs-5">Company</p>
          {companyLinks.map((item, index) => (
            <a
              key={index}
              href="#"
              style={linkStyle(index)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="col">
          <p style={{fontWeight: 600}} className="fs-5">Support</p>
          {supportLinks.map((item, index) => (
            <a
              key={index + companyLinks.length}
              href="#"
              style={linkStyle(index + companyLinks.length)}
              onMouseEnter={() => setHoverIndex(index + companyLinks.length)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="col">
          <p style={{fontWeight: 600}} className="fs-5">Account</p>
          {accountLinks.map((item, index) => (
            <a
              key={index + companyLinks.length + supportLinks.length}
              href="#"
              style={linkStyle(index + companyLinks.length + supportLinks.length)}
              onMouseEnter={() => setHoverIndex(index + companyLinks.length + supportLinks.length)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
    </div>
  );
}

export default Footer;
