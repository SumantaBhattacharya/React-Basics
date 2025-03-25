import React from "react";
// import Header from "../components/Header";
import Heading from "../components/Heading";

// import moduleName from 'module'

const Page1 = () => {

  // const [xVal, setXVal] = React.useState(0);
  // const [yVal, setYVal] = React.useState(0);

  /*const MouseMove = (e) => {
    console.log("Mouse moved", e.clientX, e.clientY, e.clientZ);
    console.log(tillRef.current.getBoundingClintRect().x); // helps us to find the dimensions of rectrangular shape 
    console.log(e.clientX - tillRef.current.getBoundingClintRect().x);
    console.log(tillRef.current.getBoundingClintRect().width);
    console.log(tillRef.current.getBoundingClintRect().width / 2); // center
    console.log(e.clientX - tillRef.current.getBoundingClintRect().width / 2); // center
    console.log(e.clientX - tillRef.current.getBoundingClintRect().x - tillRef.current.getBoundingClintRect().width / 2); // center
    setXVal(e.clientX - tillRef.current.getBoundingClintRect().x - tillRef.current.getBoundingClintRect().width / 2);
    setXVal((e.clientX - tillRef.current.getBoundingClintRect().x - tillRef.current.getBoundingClintRect().width / 2) / 50 );
    setYVal(-(e.clientY - tillRef.current.getBoundingClintRect().y - tillRef.current.getBoundingClintRect().height / 2) / 50 );

    
    tillRef.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`
  }*/

  /*
     useGSAP(function(){
       gsap.to(tiltRef.current,{
          transform : `rotate(${yVal}deg) rotateY(${xVal})deg `,
          // ease: "power2.inOut",
          duration: 2,
          // ease: "ease-out"
       })
     },[xVal,yVal])
  */

  return (
    <div id="page1" className="h-screen p-5">
      <div id="page1-in" className=" shadow-xl shadow-gray-700 h-full w-full bg-black px-16 py-8 rounded-[2vw] bg-cover bg-center bg-[url('/Images/ANZO.avif')]">
        <svg
          className="object-cover cursor-pointer relative z-10"
          preserveAspectRatio="xMidYMid meet"
          data-bbox="0 0 1608 1279"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1608 1279"
          height="100"
          width="100"
          data-type="color"

          role="img"
          aria-label="Anzo.Studio Brand Identity and Logo Design"
        >
          <g>
            <path
              fill="#FAFAFA"
              d="M661.18 1279C274.682 1279 0 992.076 0 639.5S274.682 0 661.18 0c384.07 0 656.32 286.924 656.32 639.5S1045.25 1279 661.18 1279Zm0-282.061c209.05 0 357.33-162.914 357.33-357.439 0-194.525-148.28-357.439-357.33-357.439-211.48 0-362.19 162.914-362.19 357.439 0 194.525 150.71 357.439 362.19 357.439Z"
              data-color="1"
            ></path>
            <path
              fill="#FAFAFA"
              d="M1454.86 1279c-85.08 0-153.14-68.08-153.14-153.19 0-85.1 68.06-153.186 153.14-153.186 85.08 0 153.14 68.086 153.14 153.186 0 85.11-68.06 153.19-153.14 153.19Z"
              data-color="1"
            ></path>
          </g>
        </svg>
        <Heading/>
      </div>
    </div>
  );
};

export default Page1;
