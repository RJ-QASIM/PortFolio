import React from "react";
import Image from "next/image";
import SocialIcons from "../SocialIcons/SocialIcons";
import Drawer from "../Drawer/Drawer";
import { headerData } from "../../data/Nav";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

export default function Navbar({ Color, ColorHandel, inter, onClick }) {
  const shortname = (name) => {
    if (name.length > 12) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  return (
    <>
      <nav
        className="absolute top-0 h-16 w-full z-50 flex justify-between items-center lg:px-20 px-10"
        id="#Home"
      >
        <h1
          className={`font-semibold text-4xl ${inter.className}`}
          style={{ color: Color.primary }}
        >
          {shortname(headerData.name)}
        </h1>

        <div>
          <Drawer
            Color={Color}
            ColorHandel={() => ColorHandel()}
            onClick={onClick}
          />
        </div>
      </nav>
      <div className="grid grid-cols-12">
        <div
          className={`col-span-full lg:col-span-4 h-[250px] lg:h-full  flex justify-center lg:justify-end items-center relative`}
          style={{ background: Color.quaternary }}
        >
          <div className="absolute lg:-right-44">
            <Fade left>
              <div className="relative  h-[200px] w-[200px] lg:h-[350px] lg:w-[350px] lg:mt-0 mt-60 ">
                <Image
                  src="/images/mm.png"
                  fill
                  sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
                  className={`rounded-full border-[6px] lg:border-transparent  object-cover`}
                  style={{ border: `4px solid  ${Color.primary}` }}
                  alt="portfolio"
                />
              </div>
            </Fade>
          </div>

          <div className="absolute left-0 bottom-10 lg:block hidden">
            <SocialIcons Color={Color} top="268px" />
          </div>
        </div>
        <div
          className={`col-span-full lg:col-span-8  lg:min-h-screen flex justify-end lg:items-center items-start  lg:pr-60`}
          style={{ background: Color.secondary }}
        >
          <div className="lg:max-w-[500px] flex flex-col  lg:text-start text-center w-full  p-10 lg:p-0 lg:mt-0 mt-48 ">
            <Fade bottom>
              <h1
                className={`lg:text-4xl  text-2xl font-semibold`}
                style={{ color: Color.tertiary }}
              >
                {headerData.name}
              </h1>
            </Fade>
            <Fade bottom>
              <p className="text-[#A4A6B9] mt-5 lg:text-lg text-base font-semibold">
                {headerData.description}
              </p>
            </Fade>
            <Fade bottom>
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
                  <Link
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    to="#Contact"
                  >
                    Contact
                  </Link>
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}
