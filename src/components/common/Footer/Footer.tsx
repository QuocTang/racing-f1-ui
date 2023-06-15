import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#15151e]">
      <div className="container m-auto px-3">
        <div className="flex justify-between items-center ">
          <img
            src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg"
            alt="logo"
            className="w-[120px] py-[20px]"
          />
          <div className="text-xs text-white">
            © 2003-2023 Formula One World Championship Limited
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
