// components/Loader.js
import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../../../../public/animation/loader.json";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="w-60 h-60">
        <Lottie animationData={loaderAnimation} loop={true} autoplay={true} />
      </div>
    </div>
  );
};

export default Loader;
