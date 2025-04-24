import React from "react";

const SubFooter = () => {
  const items = [
    "blog",
    "business",
    "shop",
    "none",
    "content",
    "blog",
    "business",
    "shop",
    "none",
    "content",
  ];

  return (
    <div>
      <ul> 
        <span className="font-semibold text-xl">About us</span>
        {items.map((item, index) => (
          <li className="hover:text-cyan-500 cursor-pointer ml-2" key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubFooter;
