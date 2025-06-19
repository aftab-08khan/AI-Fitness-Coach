import React from "react";
import { BackgroundBeams } from "./components/ui/background-beams";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "./components/ui/typeWriter";
import CustomButton from "./components/customButton";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      {/* <div className="absolute inset-0 z-0"> */}
      <BackgroundBeams />
      {/* </div> */}

      <div className="relative z-10 flex flex-col items-center ">
        <TypewriterEffectSmooth />
        <span className="text-white text-xl font-sora mb-4">
          Your <span className="text-[#61ff43]">Journey</span>. Your{" "}
          <span className="text-[#61ff43]">Coach</span>. Your{" "}
          <span className="text-[#61ff43]">Transformation</span>.
        </span>
        <CustomButton path="/login" color={"#61ff43"} hoverColor={"#74ff5b"}>
          Login
        </CustomButton>
        <p className="text-white mt-8">
          Didn't have account?{" "}
          <Link href={"/signUp"} className="text-[#61ff43] underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
