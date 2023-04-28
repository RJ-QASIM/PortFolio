import React from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { experienceData } from "@/data/Experience";
import Fade from "react-reveal/Fade";

export default function ExperienceCard({ Color }) {
  return (
    <div>
      {experienceData?.map((elm) => {
        return (
          <>
            <Fade bottom>
              <div className="flex  mt-5 bg-[#1E2732] p-8 lg:w-2/3 w-full  rounded-2xl">
                <div
                  className="h-16 w-16 border flex justify-center items-center rounded-full"
                  style={{ background: Color.primary }}
                >
                  <WorkOutlineIcon className="h-10 w-10 text-white " />
                </div>
                <div className="ml-5">
                  <p style={{ color: Color.primary }}>
                    {elm?.startYear}-{elm?.endYear}
                  </p>
                  <h1 style={{ color: Color.tertiary }}>{elm?.jobtitle}</h1>
                  <h1 style={{ color: Color.tertiary }}>{elm?.company}</h1>
                </div>
              </div>
            </Fade>
          </>
        );
      })}
    </div>
  );
}
