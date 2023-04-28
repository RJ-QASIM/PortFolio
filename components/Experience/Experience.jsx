import React from "react";
import AnimationLottie from "../Animation";
import experience from "../../Lottie/development.json";
import ExperienceCard from "./ExperienceCard";
import Fade from "react-reveal/Fade";
export default function Experience({ Color }) {
  return (
    <div>
      <div
        className="flex justify-center "
        style={{ background: Color.secondary }}
      >
        <div className="container mt-5   ">
          <h1
            className="text-center font-medium text-4xl  mt-[100px]"
            style={{ color: Color.primary }}
          >
            Experience
          </h1>

          <div className="grid lg:grid-cols-2 sm:grid-cols-1 mb-5 mt-[70px]">
            <Fade left>
              <div className=" flex justify-center items-center">
                <AnimationLottie animationPath={experience} width={"50%"} />
              </div>
            </Fade>
            <div className="p-4">
              <ExperienceCard Color={Color} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
