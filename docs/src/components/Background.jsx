import React from "react";

const Background = () => {
  return (
    <>
      <div className="backContainer fixed w-full z-[2] h-screen relative overflow-hidden">
        <div className="nav absolute top-[5%]  w-full py-10 flex flex-row justify-center text-zinc-700 text-xl ">
          Documents
        </div>
        {/* <div className="flex relative flex-col items-center justify-center h-full">
  <h1 className="text-[17vw] leading-none tracking-tight ">Docs</h1
  line height, letter spacing 
</div> */}
        <h1 className="Docs absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  text-[17vw] leading-none tracking-tight ">
          Docs.
        </h1>{" "}
        {/* absolute so it can go behind */}
      </div>
    </>
  );
};

export default Background;
