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
    <div className="min-h-screen w-full p-4 md:p-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <CustomHeading className="text-white mb-8 text-center">
          Workout by Body Part
        </CustomHeading>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listOfWorkouts?.length > 0 || listOfWorkouts !== null
            ? listOfWorkouts?.map((workout) => (
                <Link 
                  href={`/dashboard/workouts/${workout}`} 
                  key={workout}
                  className="group transition-all duration-300 hover:scale-105"
                >
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    {/* Background Image */}
                    <Image
                      src={bodyPartImages[workout] || "/images/default-workout.jpg"}
                      alt={workout}
                      fill
                      className="object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex items-end p-4">
                      <AnimatedButton className="w-full bg-opacity-90 bg-gray-800 text-white hover:bg-primary-600">
                        {formatName(workout)}
                      </AnimatedButton>
                    </div>
                  </div>
                </Link>
              ))
            : Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="h-64 rounded-xl overflow-hidden bg-gray-700 animate-pulse">
                  <AnimatedButtonSkeleton className="w-full h-full" />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Workouts;