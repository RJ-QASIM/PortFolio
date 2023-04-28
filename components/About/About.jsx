import React from "react";
import coding from "../../Lottie/coding.json";
import AnimationLottie from "../Animation";
import Fade from "react-reveal/Fade";

export default function About({ Color }) {
  return (
    <div>
      <div
        className="flex justify-center "
        style={{ background: Color.secondary }}
      >
        <div className="container mt-5">
          <div className="grid lg:grid-cols-2 grid-cols-1 ">
            <div className="flex justify-center items-end flex-col  ">
              <div className=" lg:w-10/12 w-full px-8">
                <Fade bottom>
                  <h1
                    style={{ color: Color.primary }}
                    className="font-semibold text-4xl mt-[30px]"
                  >
                    Who I am
                  </h1>
                </Fade>
                <Fade bottom>
                  <p
                    style={{ color: Color.tertiary }}
                    className="mt-[30px] font-semibold lg:text-lg text-base "
                  >
                    My name is Raja Qasim Ali. I&apos;m a web designer and
                    developer based in Lahore, Pakistan.
                  </p>
                </Fade>
                <Fade bottom>
                  <p
                    style={{ color: Color.tertiary }}
                    className="mt-5 font-semibold lg:text-lg text-base"
                  >
                    I am a professional and passionate programmer in my daily
                    life. A quick learner with a self-learning attitude. I love
                    to learn and explore new technologies and am Passionate
                    about Problem Solving. Love almost all the stacks of
                    Software Engineering. My current stack includes ,TypeScript
                    ,tailwind ,Github , React , NextJs, Redux, Bootstrap, Ant
                    Design, Material UI, etc.
                  </p>
                </Fade>
              </div>
            </div>
            <div>
              <div className=" flex justify-center items-center">
                <Fade right>
                  <AnimationLottie animationPath={coding} width={"50%"} />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
