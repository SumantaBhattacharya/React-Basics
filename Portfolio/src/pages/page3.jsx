import React from "react";

const Page3 = () => {
  return (
    <div className="h-screen flex items-center justify-center relative">
      {/* Lines Behind the Laptop */}
      <div className="h-0.5 w-3/5 bg-gray-500 absolute z-0 top-[35%] left-1/2 -translate-x-1/2"></div>
      <div className="h-0.5 w-4/5 bg-gray-500 absolute z-0 top-[55%] left-1/2 -translate-x-1/2"></div>
      <div className="h-0.5 w-full bg-gray-500 absolute z-0 top-[75%] left-1/2 -translate-x-1/2"></div>

      {/* Laptop Image */}
      <div className="relative w-[60%] z-10">
        <img
          className="w-full relative z-10"
          loading="lazy"
          src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_350,h_201,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png"
          alt="Laptop with screen"
          style={{
            objectFit: "contain",
            objectPosition: "center center",
          }}
        />

        {/* Video inside laptop screen */}
        <video
          className="absolute top-[7%] left-[13%] w-[74%] h-[80%] overflow-hidden z-20 object-cover"
          autoPlay
          loop
          muted
        >
          <source
            src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Page3;
