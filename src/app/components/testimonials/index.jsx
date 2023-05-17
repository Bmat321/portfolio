import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-blue-400 flex flex-col items-center" id="testimonials">
      <h1 className="text-[50px]">Testimonials</h1>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[250px] h-[70%] flex flex-col shadow-2xl shadow-current p-[20px] rounded-[20px] justify-around ">
          <div className="flex justify-center items-center">
            <Image
              src={"/assets/right-arrow.png"}
              alt=""
              width={25}
              height={25}
              priority={true}
              className="h-[25px]"
            />
            <Image
              src={
                "https://images.pexels.com/photos/16298638/pexels-photo-16298638.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
              }
              alt=""
              width={100}
              height={100}
              priority={true}
              className="w-[60px] h-[60px] rounded-[50%] object-cover ml-7 mr-7"
            />
            <Image
              src={"/assets/youtube.png"}
              alt=""
              width={25}
              height={25}
              priority={true}
              className="h-[25px]"
            />
          </div>
          <div className="bg-red-800 p-2 rounded-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className=" mb-1">Bmat</h3>
            <h2 className=" bg-transparent">CEO Bmat</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
