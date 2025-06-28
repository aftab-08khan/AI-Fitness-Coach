"use client";
import { AnimatedButton } from "@/app/components/AnimatedButton";
import { AnimatedButtonSkeleton } from "@/app/components/ButtonLoader";
import CustomHeading from "@/app/components/CustomHeading";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
    <div className="h-full w-full overflow-auto">
      <CustomHeading>Workouts</CustomHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listOfWorkouts?.length > 0 || listOfWorkouts !== null
          ? listOfWorkouts?.map((workout) => (
              <Link href={`/dashboard/workouts/${workout}`} key={workout}>
                <AnimatedButton>{workout}</AnimatedButton>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((item) => (
              <AnimatedButtonSkeleton key={item} />
            ))}
      </div>
    </div>
  );
};

export default Workouts;
