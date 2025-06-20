"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FcGoogle } from "react-icons/fa";

import CustomButton from "../customButton";

const AuthForm = ({ type, onSubmit, onGoogleSignIn }) => {
  const [email, setEmail] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <>
      <div className="pt-12 pl-10">
        <CustomButton path={"/"} padding={"6px 20px"} fontSize={"14px"}>
          Back
        </CustomButton>
      </div>

      <div
        className={`${
          type === "Sign Up" ? "mt-10" : "mt-20"
        } flex justify-center items-center`}
      >
        <form
          className="md:w-1/3 md:h-1/2 space-y-8 w-full h-full px-28 md:p-0"
          onSubmit={(e) => onSubmit(e, email, password)}
        >
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#39ff14]">
            {type}
          </h2>

          <div className="flex flex-col">
            <label className="text-[#39ff14] text-md font-normal mb-1 tracking-wide">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-[#39ff14] text-gray-800 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#39ff14] placeholder-gray-500 dark:placeholder-gray-400 transition duration-300"
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-[#39ff14] text-md font-normal mb-1 tracking-wide">
              Password
            </label>
            <input
              type={passwordHidden ? "password" : "name"}
              placeholder="Enter your Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-[#39ff14] text-gray-800 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#39ff14] placeholder-gray-500 dark:placeholder-gray-400 transition duration-300 pr-10"
            />
            <span
              className="absolute right-3 top-10 text-[#39ff14] cursor-pointer"
              onClick={() => setPasswordHidden(!passwordHidden)}
            >
              {passwordHidden ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="w-full bg-[#39ff14] text-black py-2 rounded-lg font-semibold hover:bg-lime-400 transition duration-300"
            >
              {type}
            </button>
            {onGoogleSignIn && (
              <button
                type="button"
                onClick={onGoogleSignIn}
                className="w-full py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition flex items-center justify-center gap-2"
              >
                {type} with Google
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
