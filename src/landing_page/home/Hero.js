import React, { useState } from "react";
function Hero() {
    const [isHovered, setIsHovered] = useState(false);
    return ( 
        <header className='container p-5' style={{}} >
            <div className='row text-center'>
                {/* <div className='col-12'> */}
                    <img className='mb-5' src="/Images/homeHero.png" alt="Hero Image" />
                {/* </div> */}

                <h1 style={{fontSize: "2.75rem", lineHeight: "1.25" }} className="landing-heading">Invest in everything</h1>
                <p 
                style={{
                    fontSize: "1.30rem", 
                    fontWeight: "400", 
                    lineHeight: "1.8", 
                    marginBottom: "5px"
                }} 
                className="landing-subheading mb-1">
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                <a href="/open-account" className="btn landing-heading btn-primary" id="acop_link" 
                style={{
                    backgroundColor: isHovered ? "#111" : "#387ed1",
                    borderRadius: "3px",
                    cursor: "pointer",
                    display: "inline-block",
                    // fontFamily: "Inter, serif",
                    fontSize: "19.2px",
                    fontWeight: "500",
                    height: "45.0469px",
                    lineHeight: "23.04px",
                    marginTop: "25px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingBottom: "10px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    paddingTop: "10px",
                    textAlign: "center",
                    textDecorationLine: "none",
                    textSizeAdjust: "100%",
                    whiteSpace: "nowrap",
                    width: "204.156px",

                    }}
                    onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
                    >
                        Sign up for free
                </a>

            </div>
        </header>
     );
}

export default Hero;
