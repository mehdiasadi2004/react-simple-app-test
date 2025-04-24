import React from "react";
import { useNavigate } from "react-router-dom";

export interface CardProps {
  name: string;
  title: string;
  img: string;
  id: string;
}

const Card = ({ name, title, img, id }: CardProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/detail/" + id);
      }}
      className="bg-LightGrayBlue h-[250px] w-[400px] rounded-lg hover:scale-110 hover:shadow-[0px_1px_18px_5px_rgb(0,216,245)]  transition-all duration-300 overflow-hidden cursor-pointer"
    >
      <div className="h-[70%] w-full">
        <img className="h-full w-full object-cover " src={img} />
      </div>
      <div className="py-[2px] px-2 flex flex-col gap-y-[2px]">
        <span className="text-lg font-bold">{name}</span>
        <p className="text-sm text-BoxBg  ">{title}</p>
      </div>
    </div>
  );
};

export default Card;
