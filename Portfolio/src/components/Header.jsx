import React from "react";
import "remixicon/fonts/remixicon.css";
import "../App.css";

const Header = () => {


  return (
    <div className="fixed w-full flex items-center justify-end z-10 px-20 py-20 text-white">
      <button className="scale-animation bg-black font-[FontTwo] px-4 py-2 rounded-full border-4 text-[0.8vw] mr-7 uppercase hover:bg-[#9B9B9B]">
        Plan a call
      </button>

      <svg
        className="fill-[#838383] transition-transform duration-1000 hover:rotate-180 cursor-pointer"
        preserveAspectRatio="xMidYMid meet"
        data-bbox="20 20 160 160"
        viewBox="20 20 160 160"
        height="40"
        width="35"
        xmlns="http://www.w3.org/2000/svg"
        data-type="shape"
        role="img"
        aria-label="Minimal monochrome UX/UI design for a startup website by Anzo Studio."
      >
        <g>
          <path d="M57.587 38.794c0 10.379-8.414 18.794-18.794 18.794S20 49.173 20 38.794 28.414 20 38.794 20s18.793 8.414 18.793 18.794z"></path>
          <path d="M118.794 38.794c0 10.379-8.414 18.794-18.794 18.794s-18.794-8.414-18.794-18.794S89.621 20 100 20s18.794 8.414 18.794 18.794z"></path>
          <path d="M180 38.794c0 10.379-8.414 18.794-18.794 18.794-10.379 0-18.794-8.414-18.794-18.794S150.827 20 161.206 20C171.586 20 180 28.414 180 38.794z"></path>
          <path d="M118.794 100c0 10.379-8.414 18.794-18.794 18.794S81.206 110.379 81.206 100 89.621 81.206 100 81.206s18.794 8.415 18.794 18.794z"></path>
          <path d="M180 100c0 10.379-8.414 18.794-18.794 18.794-10.379 0-18.794-8.414-18.794-18.794s8.414-18.794 18.794-18.794S180 89.621 180 100z"></path>
          <path d="M57.587 161.206c0 10.379-8.414 18.794-18.794 18.794S20 171.586 20 161.206c0-10.379 8.414-18.794 18.794-18.794s18.793 8.415 18.793 18.794z"></path>
          <path d="M118.794 161.206C118.794 171.585 110.38 180 100 180s-18.794-8.414-18.794-18.794c0-10.379 8.414-18.794 18.794-18.794s18.794 8.415 18.794 18.794z"></path>
          <path d="M180 161.206c0 10.379-8.414 18.794-18.794 18.794-10.379 0-18.794-8.414-18.794-18.794 0-10.379 8.414-18.794 18.794-18.794 10.38.001 18.794 8.415 18.794 18.794z"></path>
          <path d="M57.587 100c0 10.379-8.414 18.794-18.794 18.794S20 110.379 20 100s8.414-18.794 18.794-18.794S57.587 89.621 57.587 100z"></path>
        </g>
      </svg>


    </div>
  );
};

export default Header;
