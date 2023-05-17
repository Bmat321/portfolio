"use client";
import { useState } from "react";
import Contact from "./components/contact";
import Intro from "./components/intro";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";
import TopBar from "./components/topbar";
import Works from "./components/works";
import "./globals.css";
import Menu from "./components/menu";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="h-screen">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Intro />
        <Portfolio />
        <Works />
        {/* <Testimonials /> */}
        <Contact />
      </div>
    </div>
  );
}
