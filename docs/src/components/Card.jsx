// import React from "react";

import React, { useRef } from "react"; // ← add useRef here

import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

import {motion} from "framer-motion"

const Card = ({ data, reference }) => {
  // either pass props then do props.data or we can perform destructuring too
  const colorMap = {
    green: "bg-green-600",
    blue: "bg-blue-600",
    gray: "bg-gray-600",
    red: "bg-red-600",
    yellow: "bg-yellow-600",
    purple: "bg-purple-600",
  };

  const tagBgClass = colorMap[data.tagdetails.tagBackgroundColor] || "bg-gray-600";
  // bg-${data.tagdetails.tagBackgroundColor}-600

  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1, zIndex: 100}} dragElastic={.1} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
    onDragEnd={(e, info) => {
      // You can reset position if needed or add snap-back logic
    }}
     className="relative flex-shrink-0 w-60 h-72 rounded-[35px] bg-zinc-200 px-5 py-6 overflow-hidden">
      <FaRegFileAlt className="text-2xl text-zinc-700 " />
      <p className="text-[1.1vw] py-4 leading-none tracking-tight font-thin ">
        {data.description}
      </p>

      <div className="footer absolute bottom-0 bg-zinc-300 w-full left-0">
        <div className="flex flex-row items-center justify-between py-3 px-4 h-full">
          <span className="Card-storage text-[1vw] text-zinc-700">
            {data.fileName}
          </span>
          {/* on the value of close the icon should depend */}
          {data.close ? (
            <IoMdCloseCircleOutline size="24px" />
          ) : (
            <MdDownloading className="text-2xl " size="" />
          )}
        </div>
        {data.tagdetails.isOpen && (
          <div className={`tag w-full 
            
            ${tagBgClass}
            
           text-black text-[0.9vw] py-4`}>
            <h3 className="text-md flex items-center justify-center">
              {data.tagdetails.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};
// if the user drags the card a cross right bottom corn should dispolay to remove the card use local storage
export default Card;