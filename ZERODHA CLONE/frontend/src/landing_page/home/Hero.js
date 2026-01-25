import React, { useState } from "react";

function Hero() {
    const [isHovered, setIsHovered] = useState(false);

    return ( 
        <header className='container p-5'>
            {/* Adding internal CSS for responsive font sizes */}
            <style>
                {`
                    .landing-heading {
                        font-size: 2.75rem;
                    }
                    .landing-subheading {
                        font-size: 1.30rem;
                    }

                    @media (max-width: 768px) {
                        .landing-heading {
                            font-size: 2rem !important;
                        }
                        .landing-subheading {
                            font-size: 1.1rem !important;
                        }
                    }

                    @media (max-width: 576px) {
                        .landing-heading {
                            font-size: 1.75rem !important;
                        }
                        .landing-subheading {
                            font-size: 1rem !important;
                        }
                    }
                `}
            </style>

            <div className='row text-center'>
                <div className='col-12'>
                    {/* Added img-fluid to make the image scale with the container */}
                    <img className='mb-5 img-fluid' src="/Images/homeHero.png" alt="Hero Image" style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>

                <h1 style={{ lineHeight: "1.25" }} className="landing-heading">
                    Invest in everything
                </h1>

                <p 
                    style={{
                        fontWeight: "400", 
                        lineHeight: "1.8", 
                        marginBottom: "5px"
                    }} 
                    className="landing-subheading mb-1"
                >
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>

                <a 
                    href="/open-account" 
                    className="btn btn-primary" 
                    id="acop_link" 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{backgroundColor: isHovered ? "#111" : "#387ed1",borderRadius: "3px",cursor: "pointer",display: "inline-block",fontSize: "19.2px",fontWeight: "500",minHeight: "45px",lineHeight: "23.04px",marginTop: "25px",marginLeft: "auto",marginRight: "auto",paddingBottom: "10px",paddingLeft: "30px",paddingRight: "30px",paddingTop: "10px",textAlign: "center",textDecoration: "none",whiteSpace: "nowrap",width: "204.156px",maxWidth: "100%", // Ensures button doesn't overflow on small screensborder: "none"
                    }}
                >
                    Sign up for free
                </a>
            </div>
        </header>
    );
}

export default Hero;