import Image from "next/image";
import React, { useState } from "react";
import { works } from "../../../../datas";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < works.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div
      className="bg-green-500 flex justify-center items-center relative"
      id="works"
    >
      <div
        className="h-[350px] md:h-screen md:justify-center md:flex-col flex absolute left-0 transition-all duration-[1s] ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {works.map((work) => (
          <React.Fragment key={work.id}>
            <div
              className="w-screen flex items-center justify-center"
              key={work.id}
            >
              <div className="w-[700px] h-full md:w-[80%] md:h-[150px] md:my-2 md:mx-0 bg-white rounded-2xl flex justify-center items-center">
                <div className="flex-[4] h-[100%] bg-red-900  flex justify-center items-center">
                  <div className="w-[90%] h-[70%] flex flex-col justify-between">
                    <div className="w-[40px] h-[40px]  md:h-[19px] rounded-[50%] bg-blue-300 flex justify-center items-center">
                      <Image
                        src={work.icon}
                        alt=""
                        height={100}
                        width={100}
                        blurDataURL={work.icon}
                        className="w-[25px] md:w-[18px]"
                      />
                    </div>
                    <h1 className="text-xl md:text-sm">{work.title}</h1>
                    <p className="text-sm md:hidden">{work.desc}</p>
                    <span className="text-xs underline font-semibold cursor-pointer">
                      Projects
                    </span>
                  </div>
                </div>
                <div className="flex-[8] h-full bg-gray-300 flex justify-center items-center overflow-hidden">
                  <Image
                    src={work.img}
                    alt=""
                    width={400}
                    height={400}
                    priority={true}
                    className="w-[400px] -rotate-[10deg] rounded-[10%] border-[10px] "
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <Image
        src="/assets/arrow.png"
        width={50}
        height={50}
        alt=""
        priority={true}
        className=" h-[50px] left-[100px] rotate-180 absolute cursor-pointer md:hidden"
        onClick={() => handleClick("left")}
      />
      <Image
        src="/assets/arrow.png"
        width={50}
        height={50}
        alt=""
        priority={true}
        className="h-[50px] right-[100px] absolute cursor-pointer md:hidden"
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default Works;
