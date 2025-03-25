import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import React from 'react'
// import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// import "../App.css"
// import moduleName from 'module'
const Page2 = () => {


    useGSAP(() => {
        gsap.utils.toArray(".text-full_Design").forEach((el) => {
          gsap.from(el, {
            rotateX: "-90deg",
            opacity: 0,
            duration: 2,
            stagger: 0.3,
            scrollTrigger: {
              trigger: el,
              start: "top 30%",
              end: "top 30%",
              markers: true,
              scrub: 1,
            },
          });
        });
      }, []);
      

  return (
    <div id="section2" className='h-auto w-[100%] text-center mt-20 '>
      <h1 className='font-[FontThree] text-[1vw] text-[#9B9B9B] mt-5 mb-32 '> &copy; anzo.studio 2024 | designed and devloped</h1>
      <div className='text-full_Design'>
        <h1 className='font-[FontOne] leading-[32vw] text-[40vw] tracking-wide uppercase '>IMPACTFUL
        </h1>
      </div>
      <div className='text-full_Design'>
        <h1 className='font-[FontOne] leading-[32vw] text-[40vw] tracking-wide uppercase '>
        DESIGN
        </h1>
      </div>
      <div className='text-full_Design'>
        <h1 className='font-[FontOne] leading-[32vw] text-[40vw] tracking-wide uppercase '>
        IS THE
        </h1>
      </div>
      <div className='text-full_Design'>
        <h1 className='font-[FontOne] leading-[32vw] text-[40vw] tracking-wide uppercase '>
        DESIGN
        </h1>
      </div>
      <div className='text-full_Design'>
        <h1 className='font-[FontOne] leading-[32vw] text-[40vw] tracking-wide uppercase '>
        THAT
        </h1>
      </div>
      <div className='text-full_Design'>
        <h1 className='font-[FontOne] leading-[32vw] text-[40vw] tracking-wide uppercase '>
        WORKS
        </h1>
      </div>
    </div>
  )
}

export default Page2
// flex justify-center