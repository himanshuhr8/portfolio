import React, { useEffect } from "react";

import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@/style.css";

import "@/App.css";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import ScrollProgress from "@/components/ui/scroll-progress";
import Navbar from "@/components/Navbar";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import CodingHome from "./components/Profiles/ProfileHome";

const App: React.FC = () => {
  useEffect(() => {
    // Set the dark class on the html element to enforce dark mode globally
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);

  return (
    <BrowserRouter>
      <HeroHighlight>
        <ScrollProgress className="top-[0px]" />
        <Navbar />

        <div
          className=" container flex flex-col justify-center items-center w-full h-full overflow-x-hidden"
          style={{
            minHeight: "100vh",
            minWidth: "100vw",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/profile" element={<CodingHome />} />
          </Routes>

          <Footer />
        </div>
      </HeroHighlight>
    </BrowserRouter>
  );
};

export default App;
