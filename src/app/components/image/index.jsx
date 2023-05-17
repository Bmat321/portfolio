import Image from "next/image";
import React from "react";

const Photo = ({ title, img }) => {
  return (
    <div className="w-[220px] h-[150px] md:w-[130px] md:h-[120px] rounded-[20px] border-1 border-red-300 my-[10px] mx-[20px] md:my-[0px] md:mx-[10px] flex justify-center items-center relative transition-all duration-500 ease-in-out hover:bg-orange-300 hover:text-green-200 hover:z-0 hover:opacity-[0.5] ">
      <Image
        src={img}
        alt=""
        width={100}
        height={100}
        placeholder="blur"
        blurDataURL={img}
        className="z-[1] object-contain h-full w-full"
      />
      <h3 className="absolute text-lg bottom-4 z-[1]">{title}</h3>
    </div>
  );
};

export default Photo;
