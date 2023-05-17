import React from "react";
import { tabs } from "../../../../datas";
// import tabs from "./menulist";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={
        "w-[300px] md:w-[100px] md:right-[-100px]  h-screen bg-red-400 fixed right-[-300px] z-[2] justify-center items-center flex flex-col transition-all duration-1000 ease-in-out " +
        (menuOpen && "right-[0px] md:right-[0px]")
      }
    >
      <ul className="w-[60%] absolute top-[20%] space-y-4 md:w-[70px] md:text-xs m-0 p-0 list-none text-lg font-bold">
        {tabs.map((tab) => (
          <li key={tab.name}>
            <a
              href={tab.link}
              onClick={() => setMenuOpen(false)}
              className="decoration-inherit text-inherit"
            >
              {tab.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
