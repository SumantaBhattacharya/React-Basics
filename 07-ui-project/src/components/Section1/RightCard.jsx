import React from "react";

import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className=" shrink-0 h-full w-80 rounded-3xl relative overflow-hidden shadow-lg">
      <img
        className="w-full h-full object-cover"
        src={props.img}
        alt="Customer"
      />

      <RightCardContent id={props.id} tag={props.tag} intro={props.des} color={props.color} />
      
    </div>
  );
};

export default RightCard;
