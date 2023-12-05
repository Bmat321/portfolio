"use client";
import { useState } from "react";
import Contact from "./components/contact";
import Intro from "./components/intro";
import Menu from "./components/menu";
import Portfolio from "./components/portfolio";
import TopBar from "./components/topbar";
import "./globals.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="h-screen">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Intro />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}
// try {
//   const req = await sendEmail(
//     contact.email,
//     contact.subject,
//     contact.message
//   );
//   console.log("REQ", req);
//   // if (req.status === 250) {
//   //   setResponseMessage({
//   //     isSuccessful: true,
//   //     message: "Thank you for your message.",
//   //   });
//   // }
// } catch (e) {
//   console.log(e);
//   // setResponseMessage({
//   //   isSuccessful: false,
//   //   message: "Oops something went wrong. Please try again.",
//   // });
// }
