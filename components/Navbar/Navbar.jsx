import React from "react";
import Image from "next/image";
import SocialIcons from "../SocialIcons/SocialIcons";
import Drawer from "../Drawer/Drawer";
export default function Navbar({ Color, ColorHandel }) {
  console.log(Color, "bbbbb");
  return (
    <>
      <nav className="absolute top-0 h-16 w-full z-50 flex justify-between items-center lg:px-20 px-10">
        <h1 className={`text-[${Color.primary}]  font-semibold text-4xl`}>
          RAJA
        </h1>

        <div>
          <Drawer ColorHandel={ColorHandel} Color={Color} />
        </div>
      </nav>
      <div className="grid grid-cols-12">
        <div
          className={`col-span-full lg:col-span-4 h-[250px] lg:h-full  bg-[${Color.quaternary}] flex justify-center lg:justify-end items-center relative`}
        >
          <div className="absolute lg:-right-44">
            <div className="relative  h-[200px] w-[200px] lg:h-[350px] lg:w-[350px] lg:mt-0 mt-60 ">
              <Image
                src="/images/mm.png"
                fill
                sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
                className={`rounded-full border-[6px] lg:border-transparent border-[${Color.primary}] object-cover`}
              />
            </div>
          </div>
          <div className="absolute left-0 bottom-10 lg:block hidden">
            <SocialIcons Color={Color} />
          </div>
        </div>
        <div
          className={`col-span-full lg:col-span-8 bg-[${Color.secondary}] lg:min-h-screen flex justify-end lg:items-center items-start  lg:pr-60`}
        >
          <div className="lg:max-w-[500px] flex flex-col  lg:text-start text-center w-full  p-10 lg:p-0 lg:mt-0 mt-48 ">
            <h1
              className={`lg:text-4xl  text-2xl font-semibold`}
              style={{ color: Color.tertiary }}
            >
              RAJA QASIM ALI
            </h1>
            <p className="text-[#A4A6B9] mt-5 lg:text-lg text-base font-semibold">
              Hello! I am Raja Qasim Ali, a professional and passionate
              programmer in my daily life. A quick learner with a self-learning
              attitude. I love to learn and explore new technologies and am
              Passionate about Problem Solving.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start ">
              <button
                className="sm:w-[180px] text-[#1D9BF0] 
                                        rounded-[30px] no-underline	w-36 text-base 
                                        font-medium h-12 border-[3px] border-[#1D9BF0] 
                                        transition duration-100 ease-out 
                                        hover:bg-[#8B98A5] hover:text-[#15202B]
                                         hover:border-[#8B98A5] "
              >
                Download CV
              </button>
              <button
                className="sm:w-[180px] bg-[#1D9BF0] ml-2
                                text-[#15202B] rounded-[30px] no-underline	
                                w-36 text-base font-medium h-12 border-[3px]
                                 border-[#1D9BF0] transition duration-100 
                                 ease-out hover:bg-[#8B98A5] hover:text-[#15202B]
                                  hover:border-[#8B98A5] hidden sm:block "
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
