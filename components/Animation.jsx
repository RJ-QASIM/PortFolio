import Lottie from "lottie-react";
import React from "react";

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: { width },
      height: "350px",
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
