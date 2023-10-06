import React from "react";
import { Icon } from "@iconify/react";

const Nav = () => {
  return (
    <div className=" fixed w-full bottom-[30px] z-[99] ">
      <div className=" w-[70%] max-w-sm rounded-full m-auto backdrop-blur-[22px] shadow-[inset_0_0_0_200px_rgba(255,255,255,0.074)] text-[#e6e6e6] border border-solid border-[rgba(255,255,255,0.23)]">
        <ul className="flex text-white items-center p-2 justify-between px-8">
          <li>
            <Icon
              icon="material-symbols:home"
              width="22"
              className="cursor-pointer"
            />
          </li>
          <li>
            <Icon
              icon="icon-park-outline:ad-product"
              width="22"
              className="cursor-pointer"
            />
          </li>
          <li>
            <Icon
              icon="fluent:person-call-20-filled"
              width="22"
              className="cursor-pointer"
            />
          </li>
          <li>
            <Icon icon="mdi:about" width="22" className="cursor-pointer" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
