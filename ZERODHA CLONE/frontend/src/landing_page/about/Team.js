import React from "react";

function Team() {
  const teamMembers = [
    { name: "Nikhil Kamath", title: "Co-founder & CFO", img: "https://zerodha.com/static/images/Nikhil.jpg" },
    { name: "Dr. Kailash Nadh", title: "CTO", img: "https://zerodha.com/static/images/Kailash.jpg" },
    { name: "Venu Madhav", title: "COO", img: "https://zerodha.com/static/images/Venu.jpg" },
    { name: "Hanan Delvi", title: "CCO", img: "https://zerodha.com/static/images/Hanan.jpg" },
    { name: "Seema Patil", title: "Director", img: "https://zerodha.com/static/images/Seema.jpg" },
    { name: "Karthik Rangappa", title: "Chief of Education", img: "https://zerodha.com/static/images/karthik.jpg" },
  ];

  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center mt-5">People</h1>
      </div>

      {/* Founder Section */}
      <div className="row p-3 text-muted" style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
        <div className="col-lg-6 col-sm-12 p-5 text-center">
          <img
            src="https://zerodha.com/static/images/nithin-kamath.jpg"
            alt="Nithin Kamath"
            style={{ borderRadius: "100%", width: "55%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-lg-6 col-sm-12 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="#" style={{textDecoration: "none"}}>Homepage</a> / <a href="#" style={{textDecoration: "none"}}>TradingQnA</a> /{" "}
            <a href="#" style={{textDecoration: "none"}}>Twitter</a>
          </p>
        </div>
      </div>

      {/* Team Grid Section */}
      <div className="row p-3 mt-5">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-lg-4 col-sm-12 text-center p-5">
            <img
              src={member.img}
              alt={member.name}
              style={{ borderRadius: "100%", width: "65%" }}
            />
            <h4 className="mt-4" style={{ fontSize: "1.25rem", fontWeight: "500" }}>{member.name}</h4>
            <p className="text-muted" style={{ fontSize: "0.9rem" }}>{member.title}</p>
            
            {/* Bio link with small arrow to match screenshot */}
            <a href="#" className="text-muted" style={{ textDecoration: "none", fontSize: "0.9rem" }}>
              Bio <i className="fa fa-angle-down"></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;