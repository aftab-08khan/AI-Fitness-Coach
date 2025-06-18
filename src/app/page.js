import React from "react";
import { BackgroundBeams } from "./components/ui/background-beams";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "./components/ui/typeWriter";
import CustomButton from "./components/customButton";

const Home = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <TypewriterEffectSmooth />
        <CustomButton path="/login">Login</CustomButton>
      </div>
    </div>
  );
};

export default Home;
