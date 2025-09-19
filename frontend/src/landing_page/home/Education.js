import React from 'react';

function Education() {
    return ( 
        <div className='container'>
            <div className='row d-flex align-items-center'>

                <div className='col-md-6 text-center'>
                    <img src="/Images/education.svg" alt="Education" className="img-fluid w-75" />
                </div>


                <div className='col-md-6'>
                    <h1 className='fs-2 mb-4'>Free and open market education</h1>

                    <div className='mb-4'>
                        <p className="fs-5 text-muted mb-2">
                            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                        </p>
                        <a href="" style={{ textDecoration: "none", fontSize: "1rem", fontWeight: "500" }}>
                            Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>

                    <div className='mb-4'>
                        <p className="fs-5 text-muted mb-2">
                            TradingQ&A, the most active trading and investment community in India for all your market-related queries.
                        </p>
                        <a href="" style={{ textDecoration: "none", fontSize: "1rem", fontWeight: "500" }}>
                            TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
