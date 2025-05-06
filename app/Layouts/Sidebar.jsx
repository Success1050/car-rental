"use client";

import Image from "next/image";
import { menus } from "../constants/menu";
import { useState } from "react";
import { FaBars, FaLogout } from "react-icons/fa";

const Sidebar = ({ isWidth, setisWidth }) => {
  const [activeItem, setActiveItem] = useState(menus[0].id);

  const topMenu = menus.slice(0, 5);
  const bottomMenu = menus.slice(5);

  const renderItem = (menuList) => {
    return menuList.map((menu) => {
      const { id, name, icon } = menu;
      return (
        <div
          className={`flex justify-center items-center gap-2 cursor-pointer transition-all ease-in-out duration-1000 ${
            activeItem == id ? "active_menu" : "inactive_menu"
          }`}
          key={id}
          onClick={() => setActiveItem(id)}
        >
          <Image
            src={icon}
            width={72}
            height={72}
            className="w-[24px] h-[24px]"
          />
          <h3
            className={`text-[16px] font-medium text-white transition-all ease-in-out duration-1000 ${
              isWidth ? "hidden" : "block "
            }`}
          >
            {name}
          </h3>
        </div>
      );
    });
  };
  return (
    <>
      <div
        className={`flex flex-col items-start justify-start bg-[#1A1919] sidebar gap-[3rem] relative transition-all ease-in-out duration-1000 ${
          isWidth ? "w-[150px]" : "w-[240px]"
        }`}
      >
        <div
          className="absolute top-9 left-2"
          onClick={() => setisWidth(!isWidth)}
        >
          <FaBars size={24} className="text-white" />
        </div>
        <div
          className={` transition-all ease-in-out duration-1000 ${
            isWidth ? "hidden" : "block"
          }`}
        >
          <Image
            src="/images/logo.png"
            width={528}
            height={90}
            className="w-[176px] h-auto"
          />
        </div>

        <div className="flex flex-col justify-start items-start gap-[2rem]">
          {renderItem(topMenu)}
        </div>
        <hr
          className={` transition-all ease-in-out duration-1000 h-[2px] bg-[#FFF] ${
            isWidth ? "w-[50px]" : "w-[170px]"
          }`}
        />
        <div className="flex flex-col justify-start items-start gap-[2rem]">
          {renderItem(bottomMenu)}
        </div>

        <div
          className="flex justify-center items-center gap-2 cursor-pointer transition-all ease-in-out duration-1000 absolute bottom-[20px] logout"
          style={{ backgroundColor: "#364153 " }}
        >
          <Image
            src="/icons/logout.png"
            width={72}
            height={72}
            className="w-[24px] h-[24px]"
          />
          <h3
            className={`text-[16px] font-medium text-white transition-all ease-in-out duration-1000 ${
              isWidth ? "hidden" : "block "
            }`}
          >
            Logout
          </h3>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
