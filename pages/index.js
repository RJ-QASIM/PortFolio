import { Inter } from "@next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { theLightTheme, theDarkTheme } from "../Theme/Theme";

import React, { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

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
      <Navbar Color={Color} ColorHandel={ColorHandel} />
    </>
  );
}
