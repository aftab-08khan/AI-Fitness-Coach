"use client";
import React from "react";
import { BackgroundBeams } from "./components/ui/background-beams";
import { TypewriterEffectSmooth } from "./components/ui/typeWriter";
import CustomButton from "./components/customButton";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center relative overflow-hidden">
      <BackgroundBeams />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="hidden md:block">
          <TypewriterEffectSmooth />
        </div>

        <div className="block md:hidden mb-4">
          <h1 className="text-4xl font-bold text-white">
            Welcome <span className="text-white">to </span>
            <span className="text-[#39ff14]">Fitness Coach App</span>
          </h1>
        </div>

        <span className="text-white text-xl font-sora mb-4">
          Your <span className="text-[#61ff43]">Journey</span>. Your{" "}
          <span className="text-[#61ff43]">Coach</span>. Your{" "}
          <span className="text-[#61ff43]">Transformation</span>.
        </span>

        <CustomButton path="/login" color={"#61ff43"} hoverColor={"#74ff5b"}>
          Login
        </CustomButton>

        <p className="text-white mt-8">
          Didn&apos;t have account?{" "}
          <Link href={"/signUp"} className="text-[#61ff43] underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
