"use client";
import { AnimatedButton } from "@/app/components/AnimatedButton";
import { AnimatedButtonSkeleton } from "@/app/components/ButtonLoader";
import CustomHeading from "@/app/components/CustomHeading";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Body part images mapping
const bodyPartImages = {
  back: "/images/back-workout.jpg",
  cardio: "/images/cardio-workout.jpg",
  chest: "/images/chest-workout.jpg",
  "lower arms": "/images/arms-workout.jpg",
  "lower legs": "/images/legs-workout.jpg",
  neck: "/images/neck-workout.jpg",
  shoulders: "/images/shoulders-workout.jpg",
  "upper arms": "/images/arms-workout.jpg",
  "upper legs": "/images/legs-workout.jpg",
  waist: "/images/abs-workout.jpg",
};

const Workouts = () => {
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };
  const [listOfWorkouts, setListOfWorkouts] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setListOfWorkouts(result);
    } catch (error) {
      console.error(error);
      // Fallback data in case API fails
      setListOfWorkouts([
        "back",
        "cardio",
        "chest",
        "lower arms",
        "lower legs",
        "neck",
        "shoulders",
        "upper arms",
        "upper legs",
        "waist",
      ]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Format body part name for display
  const formatName = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Component
      className={cn(
        "relative h-16 w-40 overflow-hidden bg-transparent p-[1px] text-xl",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="40%" ry="40%">
          <div
            className={cn(
              "h-32 w-32 bg-[radial-gradient(#ebffe8_60%,transparent_80%)] opacity-[0.8] ",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
};

export default Workouts;
