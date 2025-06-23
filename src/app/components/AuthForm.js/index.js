"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import CustomButton from "../customButton";

const AuthForm = ({ type, onSubmit, onGoogleSignIn }) => {
  const [email, setEmail] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="pt-6 pl-4 md:pt-12 md:pl-10">
        <CustomButton path={"/"} padding={"6px 20px"} fontSize={"14px"}>
          Back
        </CustomButton>
      </div>

      <div className="mt-10 flex justify-center items-center px-4">
        <form
          className="w-full max-w-md space-y-8"
          onSubmit={(e) => onSubmit(e, email, password)}
        >
          <h2 className="text-2xl font-semibold text-center text-[#39ff14]">
            {type}
          </h2>

          <div className="flex flex-col">
            <label className="text-[#39ff14] text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-[#39ff14] bg-white text-black dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#39ff14] transition duration-300"
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-[#39ff14] text-sm font-medium mb-1">
              Password
            </label>
            <input
              type={passwordHidden ? "password" : "text"}
              placeholder="Enter your Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 pr-10 rounded-md border border-[#39ff14] bg-white text-black dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#39ff14] transition duration-300"
            />
            <span
              className="absolute right-3 top-9 text-[#39ff14] cursor-pointer"
              onClick={() => setPasswordHidden(!passwordHidden)}
            >
              {passwordHidden ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <button
              type="submit"
              className="w-full bg-[#39ff14] text-black py-2 rounded-md font-semibold hover:bg-lime-400 transition duration-300"
            >
              {type}
            </button>

            {onGoogleSignIn && (
              <button
                type="button"
                onClick={onGoogleSignIn}
                className="w-full bg-white text-black py-2 rounded-md border border-gray-300 font-medium hover:bg-gray-200 transition flex items-center justify-center gap-2"
              >
                <FcGoogle className="text-xl" />
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
