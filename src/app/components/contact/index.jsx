import { SendContactForm } from "@/utils/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import toast from "react-hot-toast";
import { init } from "ityped";

const Contact = () => {
  const [contact, setContact] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState({
    isLoading: false,
    error: "",
  });

  const { error, isLoading } = responseMessage;

  const handleClick = (e) => {
    setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage((prev) => ({ ...prev, isLoading: true }));
    try {
      await SendContactForm(contact);
      toast.success("Message sent successfully");
      e.target.reset();
      // setContact((prev) => ({ ...prev, email: "", subject: "", message: "" }));
    } catch (error) {
      setResponseMessage((prev) => ({
        ...prev,
        isLoading: false,
        error: error.props,
      }));
    }
    setResponseMessage((prev) => ({ ...prev, isLoading: false }));
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
          className="w-[70%] h-[60%] flex flex-col justify-around items-center"
        >
          <input
            required
            type="email"
            name="email"
            onChange={handleClick}
            placeholder="Email"
            className="w-[300px] h-[30px] text-base text-black p-1 focus:outline-none md:w-[200px] md:h-[20px]"
          />
          <input
            required
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={handleClick}
            className="w-[300px] h-[30px] text-base text-black p-1 focus:outline-none md:w-[200px] md:h-[20px]"
          />
          <textarea
            required
            placeholder="message"
            name="message"
            onChange={handleClick}
            rows={8}
            className="w-[300px] h-[200px] text-base text-black p-1 border-none focus:outline-none md:w-[200px] md:h-[100px]"
          ></textarea>
          {isLoading ? (
            <div className="w-[150px] md:w-[80px] md:text-base h-[30px] text-white rounded-[10px] bg-blue-200 cursor-pointer border-none">
              <Loader />
            </div>
          ) : (
            <button
              type="submit"
              className="w-[150px] md:w-[80px] md:text-base h-[30px] text-white rounded-[10px] cursor-pointer bg-blue-200 border-none"
            >
              Send
            </button>
          )}

          {error && <span className=" text-red-400">{error}</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
