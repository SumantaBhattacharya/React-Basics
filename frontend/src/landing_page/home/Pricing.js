import React from 'react';

function Pricing() {
    return ( 
        <div>
            <div className='container mt-5 mb-5'>
                <div className='row'>
                    <div className='col-4'>
                        <h1 className='mb-3'>Unbeatable pricing</h1>
                        <p className="text-muted">
                            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                        </p>
                        <a href="" style={{textDecoration: "none", fontSize:"0.9vw", fontWeight:"500"}}>See pricing  <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                    </div>
                    <div className='col-2'></div>
                    <div className='col-6'>
                        <div className='row text-center'>
                            <div className='col-6 border p-2 '>
                                <h1  className='mb-4'>₹0</h1>
                                <p className="text-muted">Free equity delevery and <br /> direct mutual funds</p>
                            </div>
                            <div className='col-6 border p-2 '>
                                <h1 className='mb-4'>₹20</h1>
                                <p className="text-muted">No brokerage fees</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;