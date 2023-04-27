import React, { useState } from "react";
import { Inter } from "@next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { theLightTheme, theDarkTheme } from "../Theme/Theme";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [Color, setColor] = useState(theDarkTheme);

  const ColorHandel = () => {
    // theDarkTheme.type === "dark"
    //   ? setColor(theDarkTheme)
    //   : setColor(theLightTheme);
    if (Color === theDarkTheme) {
      setColor(theLightTheme);
    } else if (Color === theLightTheme) {
      setColor(theDarkTheme);
    }
  };

  return (
    <>
      <Navbar ColorHandel={() => ColorHandel()} Color={Color} />
    </>
  );
}
