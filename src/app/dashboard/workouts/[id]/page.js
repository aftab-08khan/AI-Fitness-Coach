"use client";
import CustomButton from "@/app/components/customButton";
import { ThreeDCard } from "@/app/components/ThreeDCard";
import { ThreeDCardSkeleton } from "@/app/components/ThreeDCardLoader";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const SingleWorkoutPage = () => {
  const pathname = usePathname();
  const currentWorkoutName = pathname.split("/").pop();

  const [singleWorkoutData, setSingleWorkoutData] = useState(null);

  const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${currentWorkoutName}?limit=10&offset=0`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };

  const fetchSingleWorkout = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSingleWorkoutData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSingleWorkout();
  }, []);

  return (
    <div className="h-full w-full overflow-scroll p-4 scrollbar-hide">
      <CustomButton
        path="/dashboard/workouts"
        padding="8px 16px"
        fontSize="16px"
      >
        Back
      </CustomButton>

      <div
        className="grid gap-2 lg:gap-6 mt-6 
        grid-cols-1 
        sm:grid-cols-1 
        lg:grid-cols-2 
        xl:grid-cols-2 
        2xl:grid-cols-3"
      >
        {singleWorkoutData !== null || singleWorkoutData?.length > 0
          ? singleWorkoutData?.map((item) => (
              <ThreeDCard key={item?.id} data={item} />
            ))
          : [1, 2, 3, 4, 5, 6].map((item) => <ThreeDCardSkeleton key={item} />)}
      </div>
    </div>
  );
};

export default SingleWorkoutPage;
