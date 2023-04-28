import React from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";

export default function Projects({ Color }) {
  return (
    <div>
      <div
        className="flex justify-center "
        style={{ background: Color.secondary }}
      >
        <div className="container mt-5    ">
          <h1
            className="text-center font-medium text-4xl  mt-[100px]"
            style={{ color: Color.primary }}
          >
            Projects
          </h1>
          <div className="grid lg:grid-cols-3 gap-12 grid-cols-1 m-4 mt-[90px]">
            <Fade bottom>
              <div
                className="text-center bg-[#0C0B33] p-8 rounded-xl  h-96 "
                style={{ color: Color.tertiary }}
              >
                <h1 className="font-semibold text-2xl">Dictionaryish</h1>
                <div className=" mt-10  flex justify-center items-center">
                  <Image
                    src="/projects/six.svg"
                    width={280}
                    height={280}
                    alt="pic"
                  />
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div
                className="text-center bg-[#0C0B33] p-8 rounded-xl  h-96 "
                style={{ color: Color.tertiary }}
              >
                <h1 className="font-semibold text-2xl">Jump Recruiter</h1>
                <div className=" mt-10  flex justify-center items-center">
                  <Image
                    src="/projects/seven.svg"
                    width={280}
                    height={280}
                    alt="pic"
                  />
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div
                className="text-center bg-[#0C0B33] p-8 rounded-xl  h-96 "
                style={{ color: Color.tertiary }}
              >
                <h1 className="font-semibold text-2xl">Imperial Locum</h1>
                <div className=" mt-10  flex justify-center items-center">
                  <Image
                    src="/projects/four.svg"
                    width={280}
                    height={280}
                    alt="pic"
                  />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
