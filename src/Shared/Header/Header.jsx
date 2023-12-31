import React from 'react';
import line from "../../assets/Shared/line.png"

const Header = ({title, text}) => {
  return (
    <div className="text-center mb-12 mt-4">
      <p className="text-[48px] font-alice text-[#272932] dark:text-white">{title}</p>
      <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
      <p className="text-[18px] font-lato text-[#3E4A5B] dark:text-gray-200">{text}</p>
    </div>
  );
};

export default Header;