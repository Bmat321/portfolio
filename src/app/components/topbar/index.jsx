"use client";
import React from "react";
import Person from "@material-ui/icons/Person";
import Mail from "@material-ui/icons/Mail";

const TopBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={
        "w-full h-16 bg-blue-200 text-white-600 fixed top-0 z-[3] items-center transition-all duration-1000 ease-in-out " +
        (menuOpen && "bg-red-400 transition-all duration-1000 ease-in-out")
      }
    >
      <div className="flex py-3 px-7 items-center justify-between">
        <div className="flex items-center ">
          <a href="#intro" className="text-3xl font-bold no-underline mr-4  ">
            Matthew
          </a>
          <div className="flex items-center ml-4 md:hidden">
            <Person className="text-lg mr-2" />
            <span className=" text-base font-bold ">+234 807464 0440</span>
          </div>
          <div className="flex items-center ml-4 md:hidden">
            <Mail className="text-lg mr-2" />
            <span className=" text-base font-bold">
              mathewabioduntech537@gmail.com
            </span>
          </div>
        </div>
        <div>
          <div
            className={
              "w-8 h-7 justify-between flex flex-col cursor-pointer " +
              (menuOpen && "[&>*:nth-child(2)]:opacity-0")
            }
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={
                "w-full h-1 bg-white transition-all duration-1000 ease-in-out " +
                (menuOpen &&
                  "origin-left transition-all duration-1000 ease-in-out first:bg-white first:rotate-45")
              }
            ></span>
            <span
              className={
                "w-full h-1 bg-white transition-all duration-1000 ease-in-out " +
                (menuOpen &&
                  "origin-left transition-all duration-1000 ease-in-out ")
              }
            ></span>
            <span
              className={
                "w-full h-1 bg-white transition-all duration-1000 ease-in-out " +
                (menuOpen &&
                  "origin-left transition-all duration-1000 ease-in-out last:bg-white last:-rotate-45")
              }
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
