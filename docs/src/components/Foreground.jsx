// import React from "react";
import Card from "./Card";

import React, { useRef } from "react"; // ← add useRef here

const Foreground = () => {

  const ref = useRef(null);

  const data = [
    {
      // id: 1,
      fileName: "Document 1",
      description: "This is the first document.",
      filesize: ".9mb",
      close: true,
      tagdetails: { isOpen: true, tagTitle: "Download Now", tagBackgroundColor: "green",  },
    },{
      fileName: "Annual Report",
      description: "Annual report summary for 2025.",
      filesize: "1.2mb",
      close: false,
      tagdetails: {
        isOpen: false,
        tagTitle: "Unavailable",
        tagBackgroundColor: "gray",
      },
    },
    {
      fileName: "Presentation Slides",
      description: "Slides from the marketing team’s presentation.",
      filesize: "3.4mb",
      close: true,
      tagdetails: {
        isOpen: true,
        tagTitle: "View Slides",
        tagBackgroundColor: "blue",
      },
    },
  ];

  return (
    <>
      <div ref={ref} className="foreground fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5 ">
        {/* now we not able to select the docs. */}

        {/* <Card /> */}
        {
          data.map((item, index) => (
            <Card
              /*
              key={index}// does the same thing item.id. it does give a id not need to explicitly define it in the object
               fileName={item.fileName}
               description={item.description}
               filesize={item.filesize}
               close={item.close}
               tagdetails={item.tagdetails}
              {...item} // spread operator to pass all properties of item as props
              */

              data = {item} // passing the whole item object as a prop
              reference = {ref}
            />
          ))
        }
      </div>
    </>
  );
};

export default Foreground;
