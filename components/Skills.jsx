import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { skillsData } from "../data/Skills";
import { skillsImage } from "@/utility/skills-image";

export default function Skills({ Color }) {
  return (
    <div>
      <div
        id="#Skills"
        className="mt-[60px]"
        style={{ background: Color.secondary }}
      >
        <h1
          className="text-center font-medium text-4xl   "
          style={{ color: Color.primary }}
        >
          Skills
        </h1>
        <div className=" w-full flex justify-around mt-[100px] p-8">
          <Marquee>
            {skillsData.map((elm) => {
              return (
                <>
                  <div className="h-[200px] w-[200px]  flex flex-col justify-center items-center  m-4 shadow-[0_5px_90px_-15px_rgba(0,0,0,0.3)] shadow-indigo-500/40">
                    <Image
                      src={skillsImage(elm)}
                      width={80}
                      height={80}
                      alt={elm}
                    />
                    <p className="mt-4  " style={{ color: Color.tertiary }}>
                      {elm}
                    </p>
                  </div>
                </>
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
