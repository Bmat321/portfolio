import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { init } from "ityped";

const summary =
  "experienced in React.js and React Native to building both front-end and back-end applications, enhancing an application as necessary. debugging code, and creating live data feed-interactive user interfaces.";

const Intro = () => {
  const letterRef = useRef();
  useEffect(() => {
    init(letterRef.current, {
      showCursor: true,
      backDelay: 1500,
      cursorChar: "|",
      backSpeed: 70,
      strings: ["Software Devoloper", summary],
    });
  }, []);

  return (
    <div className="md:flex-col md:items-center flex bg-white" id="intro">
      <div className="flex-[0.5] md:flex-[0.4] md:h-[40px] md:flex overflow-hidden">
        <div className="flex w-[700px] h-[700px] justify-center md:mt-2 mt-6 items-end  md:items-start float-right rounded-[50%]">
          <Image
            src={require("../../../../public/assets/ma.png")}
            alt="developer"
            width={300}
            height={100}
            priority={true}
            className="h-[90%] md:h-[40%]"
          />
        </div>
      </div>
      <div className="flex-[0.5] md:flex relative">
        <div className="text-black w-full h-full pl-20 md:pl-5  md:items-center flex flex-col justify-center items-start">
          <h2 className="text-3xl md:text-xl">Hi There, I`am</h2>
          <h1 className="text-5xl my-2 mx-0 md:font-bold md:text-[20px] ">
            Matthew Abiodun
          </h1>
          <h3 className="text-2xl md:text-sm h-5 md:h-5 font-bold animate-bounce md:text-[20px]">
            I am{" "}
            <span
              className="text-2xl md:text-sm md:pl-0 pl-2 text-red-400"
              ref={letterRef}
            ></span>
          </h3>
        </div>
        <a
          href="#portfolio"
          className="absolute bottom-4 md:bottom-0 left-[30%] md:left-[50%] animate-ping"
        >
          <Image
            src={require("../../../../public/assets/down.png")}
            alt="down"
            width={20}
            height={20}
            priority={true}
            className=" md:text-sm"
          />
        </a>
      </div>
    </div>
  );
};

export default Intro;
