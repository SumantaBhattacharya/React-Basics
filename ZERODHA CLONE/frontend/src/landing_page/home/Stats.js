import React from 'react';

function Stats() {
    const statsData = [
        {
            title: "Customer-first always",
            description: "That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India."
        },
        {
            title: "No spam or gimmicks",
            description: "No gimmicks, spam, 'gamification', or annoying push notifications. High quality apps that you use at your pace, the way you like."
        },
        {
            title: "The Zerodha universe",
            description: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs."
        },
        {
            title: "Do better with money",
            description: <>
            With initiatives like  
            <a 
                href="https://zerodha.com/nudge" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ textDecoration: "none", color: "#387ED1", fontWeight: "500" }}
            > Nudge</a> 
            and  
            <a 
                href="https://support.zerodha.com/category/console/segments/killswitch/articles/what-is-the-kill-switch" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ textDecoration: "none", color: "#387ED1", fontWeight: "500" }}
            > Kill Switch</a>, 
            we don't just facilitate transactions, but actively help you do better with your money.
            </>
        }
    ];

    return ( 
        <div className='container p-md-5 p-3 mt-5'>
            {/* Adding internal CSS for small adjustments */}
            <style>
                {`
                    .stats-link {
                        text-decoration: none;
                        font-weight: 500;
                        font-size: 1.1rem;
                    }
                    @media (min-width: 992px) {
                        .stats-link {
                            font-size: 0.9vw;
                        }
                    }
                `}
            </style>

            <div className='row align-items-center'>
                {/* Changed to col-md-6 and added responsive padding */}
                <div className='col-12 col-md-6 p-md-5'>
                    <h2 className='mb-5 fs-2'>Trust with confidence</h2>
                    {statsData.map((item, index) => (
                        <div className="mt-4" key={index}>
                            <h5 className='fs-4' style={{fontWeight: "500",}}>{item.title}</h5>
                            <p className='fs-6 text-muted' style={{fontWeight: "400"}}>{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Changed to col-md-6 and ensured text-center for the image area */}
                <div className='col-12 col-md-6 text-center mt-5'>
                    <img 
                        src="Images/ecosystem.png" 
                        alt="Ecosystem" 
                        className="img-fluid" 
                        style={{ width: "90%" }} 
                    />
                    <div className="mt-4 d-flex flex-wrap justify-content-center">
                        <a className='stats-link mx-4 my-2' href="">
                            Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a className='stats-link mx-4 my-2' href="">
                            Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;