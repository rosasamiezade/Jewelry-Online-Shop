import { useState } from "react";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

interface IShowHideProps {
 hide:boolean;
 handleClick:()=>void;
}

const ShowHide: React.FC<IShowHideProps> = ({hide,handleClick}): JSX.Element => {
  return (
      <span onClick={handleClick} className="text-xl">
        {hide?<BiShow />:<BiHide/>}
      </span>
 
  );
};

export default ShowHide;
