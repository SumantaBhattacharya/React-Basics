import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute inset-0 p-8 flex flex-col justify-between bg-gradient-to-t from-black/70 to-transparent text-gray-100">
      {/* Top Badge */}
      <div className="bg-black/60 text-white text-sm w-14 h-14 flex items-center justify-center rounded-full font-semibold">
        {props.id + 1}
      </div>

      {/* Bottom Text */}
      <div className="space-y-3 text-2xl font-bold">
        <p className="text-sm leading-snug mb-10">
          {props.intro}
        </p>
        <div className="flex flex-row justify-between">
          <button style={{backgroundColor: props.color}} className="text-white px-7 py-3 rounded-full text-xs font-medium hover:bg-blue-700 transition">
            {props.tag}
          </button>
          <button style={{backgroundColor: props.color}} className="text-white px-4 py-3 rounded-full text-xs font-medium hover:bg-blue-700 transition">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
