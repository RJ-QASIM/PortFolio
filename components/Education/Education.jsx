import React from "react";
import AnimationLottie from "../Animation";
import education from "../../Lottie/education.json";
import EducationCard from "./EducationCard";
// import Fade from "react-reveal/Fade";

export default function Education({ Color }) {
  return (
    <div id="#Education">
      <div
        className="flex justify-center"
        style={{ background: Color.secondary }}
      >
        <div className="container mt-5   ">
          <h1
            className="text-center font-medium text-4xl mt-[60px] "
            style={{ color: Color.primary }}
          >
            Education
          </h1>

          <div className="grid lg:grid-cols-2 sm:grid-cols-1 mb-5 mt-[60px]">
            {/* </Fade> */}
            <div className=" flex justify-center items-center p-8">
              <AnimationLottie animationPath={education} width={"50%"} />
            </div>
            {/* </Fade> */}
            <div className="p-4">
              <EducationCard Color={Color} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
