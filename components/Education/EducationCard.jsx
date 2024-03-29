import React, { Fragment } from "react";
import { educationData } from "@/data/Education";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
// import Fade from "react-reveal/Fade";

export default function EducationCard({ Color }) {
  return (
    <div>
      {educationData?.map((elm, index) => {
        return (
          <Fragment key={index}>
            {/* </Fade> */}
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
                <h1 style={{ color: Color.tertiary }}>{elm?.course}</h1>
                <h1 style={{ color: Color.tertiary }}>{elm?.institution}</h1>
              </div>
            </div>
            {/* </Fade> */}
          </Fragment>
        );
      })}
    </div>
  );
}
