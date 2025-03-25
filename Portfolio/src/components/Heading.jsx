import React, { useEffect, useRef } from "react";
import {useGSAP} from "@gsap/react"
import gsap from "gsap";

const Heading = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current && window.VanillaTilt) {
      window.VanillaTilt.init(tiltRef.current, {
        reverse:                true,  // reverse the tilt direction
      });
    }
  }, []);

  useGSAP(function gsapFunction() {
    gsap.to("#banner img",{
        rotate: 360,
        duration: 3,
        // ease: "power2.inOut",
        ease: "linear",
        // yoyo: true,
        repeat: -1,
    })
  })


  return (
    <div className="text-white mt-48 flex flex-col justify-between h-[65%] ">
      <div ref={tiltRef} className="font-[FontTwo] w-fit tilt-element">
        <h1 id="page1-inHeading" className="text-7xl uppercase leading-none">
          I am <span className=" text-black">dark mode</span>™ <br />
          <span className="text-8xl ">designer</span> <br /> to hire
        </h1>
      </div>

      <div className=" flex items-center justify-between w-auto ">
        <div>
          <h5 className="text-3xl uppercase text-[#fff] font-[FontTwo]">
            brand design | website design <br />
            <span className="font-[FontThree] text_grey text-[#9B9B9B]">
              BESPoKE Freelance
            </span>{" "}
          </h5>
        </div>
        <div id="banner" className="flex flex-col items-center justify-between h-44 ">
          <img

            className="object-cover object-center h-20 w-20"
            src="https://wixmp-cca7fdc52d9b9ae8ca79a86d.wixmp.com/marketplace/partners/29ffdaf8-d3ec-4d04-b777-d197ef1693be/profile-image/1689267213574/wix-legend-partner-agency-wix-trainer-com.png"
            alt=""
          />
          <img
            className="object-cover object-center h-20 w-20"
            src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_89,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Heading;
// we could havge done the done flex flex-column
// leading
// https://micku7zu.github.io/vanilla-tilt.js/ēṁṇ