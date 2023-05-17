import Image from "next/image";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="bg-yellow-200 flex md:flex-col" id="contact">
      <div className="flex-1 overflow-hidden ">
        <Image
          src={"/assets/shake.svg"}
          width={500}
          height={500}
          alt=""
          priority={true}
          className="h-full"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center ">
        <h2 className="text-2xl">Contact</h2>
        <form
          onSubmit={handleSubmit}
          className="w-[70%] h-[70%] flex flex-col justify-around items-center"
        >
          <input
            type="text"
            placeholder="Email"
            className="w-[300px] h-[30px] text-base text-black p-1 focus:outline-none md:w-[200px] md:h-[20px]"
          />
          <textarea
            placeholder="message"
            className="w-[300px] h-[200px] text-base text-black p-1 border-none focus:outline-none md:w-[200px] md:h-[100px]"
          ></textarea>
          <button
            type="submit"
            className="w-[150px] md:w-[80px] md:text-base h-[30px] text-white rounded-[10px] cursor-pointer bg-red-800 border-none "
          >
            Send
          </button>
          {message && (
            <span className=" text-green-400">Thanks for your message</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
