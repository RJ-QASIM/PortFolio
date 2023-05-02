import React, { useState, useRef } from "react";
import { Inter, Dancing_Script } from "@next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Experience from "@/components/Experience/Experience";
import Education from "@/components/Education/Education";
import About from "@/components/About/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Project/Projects";
import { theLightTheme, theDarkTheme } from "../Theme/Theme";
import Footer from "@/components/Footer";
const inter = Dancing_Script({ subsets: ["latin"] });

export default function Home() {
  const [Color, setColor] = useState(theDarkTheme);

  const ColorHandel = () => {
    if (Color === theDarkTheme) {
      setColor(theLightTheme);
    } else if (Color === theLightTheme) {
      setColor(theDarkTheme);
    }
  };

  return (
    <>
      <Navbar ColorHandel={() => ColorHandel()} Color={Color} inter={inter} />
      <About Color={Color} />
      <Experience Color={Color} />
      <Skills Color={Color} />
      <Projects Color={Color} />
      <Education Color={Color} />
      <Footer Color={Color} />
    </>
  );
}
