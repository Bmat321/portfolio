import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { init } from "ityped";

const Intro = () => {
  const letterRef = useRef();
  useEffect(() => {
    init(letterRef.current, {
      showCursor: true,
      backDelay: 1500,
      cursorChar: "|",
      backSpeed: 70,
      strings: [
        "Software Devoloper",
        "experienced in React.js AND React Native",
      ],
    });
  }, []);

  return (
    <div className="md:flex-col md:items-center flex bg-white" id="intro">
      <div className=" flex-[0.5] overflow-hidden">
        <div className="flex w-[700px] h-[700px] justify-center mt-6 items-end md:items-start float-right rounded-[50%] bg-red-400 ">
          <Image
            src="https://drive.google.com/file/d/1MoYGIV9PT1UEECXiNPa77UjMYOdQSt9f/view?usp=share_link"
            alt="developer"
            width={400}
            height={100}
            priority={true}
            className="h-[90%] md:h-[50%] lg:p-9 "
          />
        </div>
      </div>
      <div className="flex-[0.5] relative">
        <div className="text-black w-full h-full pl-14 md:pl-0 md:items-center flex flex-col justify-center items-start">
          <h2 className=" text-3xl">Hi There, I`am</h2>
          <h1 className=" text-5xl my-2 mx-0 md:text-[40px] ">Matthew Bmat</h1>
          <h3 className=" text-2xl font-bold animate-bounce md:text-[20px]">
            I am <span className="text-lg text-red-400" ref={letterRef}></span>
          </h3>
        </div>
        <a
          href="#portfolio"
          className="absolute bottom-4 left-[30%] md:left-[50%] animate-ping"
        >
          <Image
            src="/assets/down.png"
            alt="down"
            width={30}
            height={30}
            priority={true}
          />
        </a>
      </div>
    </div>
  );
};

export default Intro;
