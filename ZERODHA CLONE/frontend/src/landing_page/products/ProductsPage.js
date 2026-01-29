import React from 'react'

import Hero from './Hero';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';

import Universe from './Universe';

// .map() only works on arrays, .map() returns a single JSX element or fragment
/*const productDetails = [
  {
    imageURL:"/images/kite.png", 
    productName:"Kite", 
    productDesription:"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.", 
    tryDemo:"",
    learnMore:"", 
    googlePlay:"", 
    appStore:""
  },
  {
    imageURL:"/images/console.png",
    productName:"Console", 
    productDesription:"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.", 
    learnMore:""
  },
  {
    imageURL:"/images/coin.png",
    productName:"Coin", 
    productDesription:"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.", 
    tryDemo:"",
    learnMore:"", 
    googlePlay:"", 
    appStore:""
  },
  {
    imageURL:"/images/kiteconnect.png",
    productName:"Kite Connect API", 
    productDesription:"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.", 
    learnMore:""
  },
  {
    imageURL:"/images/varsity.png",
    productName:"Varsity mobile", 
    productDesription:"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.", 
    tryDemo:"",
    learnMore:"", 
    googlePlay:"", 
    appStore:""
  }

]*/

const ProductsPage = () => {
  return (
    <div>
      <Hero />
      <LeftComponent imageURL="/images/kite.png" productName="Kite" productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""/>
      <RightComponent imageURL="/images/console.png" productName="Console" productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore=""/>
      <LeftComponent imageURL="/images/coin.png" productName="Coin" productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""/>
      <RightComponent imageURL="/images/kiteconnect.png" productName="Kite Connect API" productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore=""/>
      <LeftComponent imageURL="/images/varsity.png" productName="Varsity mobile" productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlay="" appStore=""/>
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
      {/* <LeftComponent {...productDetails.kite} />
      <RightComponent {...productDetails.console} />
      <LeftComponent {...productDetails.coin} />
      <RightComponent {...productDetails} />
      <LeftComponent {...productDetails} /> */}

      {/* <RightComponent {...productDetails[1]} />
      <LeftComponent {...productDetails[0]} />
      <LeftComponent {...productDetails[2]} />
      <RightComponent {...productDetails[3]} />
      <LeftComponent {...productDetails[4]} /> */}
    </div>
  )
}

export default ProductsPage

/*
this approach is wrong because map returns a single element
{
        productDetails.map((product, idx) => {
          return (

            <LeftComponent imageURL={product.imageURL} productName={product.productName} productDesription={product.productDesription} tryDemo={product.tryDemo} learnMore={product.learnMore} googlePlay={product.googlePlay} appStore={product.appStore}/>
            <RightComponent imageURL={product.imageURL} productName={product.productName} productDesription={product.productDesription} learnMore=""/>
            <LeftComponent imageURL={product.imageURL} productName={product.coin.productName} productDesription={product.coin.productDesription} tryDemo={product.coin.tryDemo} learnMore={product.coin.learnMore} googlePlay={product.coin.googlePlay} appStore={product.coin.appStore}/>
            <RightComponent imageURL={product.imageURL} productName={product.productName} productDesription={product.productDesription} learnMore={product.learnMore}/>
            <LeftComponent imageURL={product.imageURL} productName={product.productName} productDesription={product.productDesription} tryDemo={product.productDesription} learnMore={product.learnMore} googlePlay={product.googlePlay} appStore={product.appStore}/>
          )
        })
      }

*/