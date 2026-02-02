import React from 'react'

const LeftComponent = ({imageURL,productName,productDesription,tryDemo,learnMore,googlePlay,appStore,
}) => {
  return (
    <div className="container mt-3 mt-md-5">
      <div className="row align-items-center">
        
        {/* Image Column - order-1 (Mobile/Tab), order-md-1 (Desktop) */}
        <div className="col-12 col-md-6 order-1 order-md-1"> 
          {/* This forces the image to be the first item on mobile. */}
          <div className="text-center text-md-start p-3 p-md-0">
            <img src={imageURL} alt={productName}className="img-fluid"style={{ maxWidth: "100%", height: "auto",maxHeight: "clamp(300px, 40vh, 500px)"}} />
          </div>
        </div>
        
        {/* Content Column - order-2 (Mobile/Tab), order-md-2 (Desktop) */}
        <div className="col-12 col-md-6 p-3 p-md-5 order-2 order-md-2">
          {/* This forces the text to be the second item (below the image) on mobile. */}
          <h1 className="mb-3 mb-md-4" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}>
            {productName}
          </h1>
          
          <p className="mb-4 mb-md-5 text-muted" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",lineHeight: "1.6"
          }}>
            {productDesription}
          </p>
          
          {/* Demo & Learn More Links */}
          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center mb-4 mb-md-5">
            {tryDemo && (
              <a href={tryDemo} className="mb-2 mb-sm-0 me-sm-4"style={{ textDecoration: "none",color: "#387ED1",fontWeight: "500",fontSize: "clamp(14px, 1.4vw, 16px)"}}>
                Try Demo <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
              </a>
            )}
            
            {learnMore && (
              <a href={learnMore}style={{ textDecoration: "none",color: "#387ED1",fontWeight: "500",fontSize: "clamp(14px, 1.4vw, 16px)"}}>
                Learn More <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
              </a>
            )}
          </div>
          
          {/* App Store Badges */}
          {(googlePlay || appStore) && (
            <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center mt-3">
              {googlePlay && (
                <a href={googlePlay} className="mb-3 mb-sm-0 me-sm-4"style={{ display: "inline-block" }}>
                  <img src="/images/googlePlayBadge.svg" alt="Google Play"className="img-fluid"style={{ maxWidth: "clamp(120px, 20vw, 160px)",height: "auto" }}/>
                </a>
              )}
              
              {appStore && (
                <a href={appStore}style={{ display: "inline-block" }}>
                  <img src="/images/appstoreBadge.svg" alt="App Store"className="img-fluid"style={{ maxWidth: "clamp(120px, 20vw, 160px)",height: "auto" }}/>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftComponent;