"use client";
import CustomButton from "@/app/components/customButton";
import ExerciseCards from "@/app/components/ExcerciseCard";
import { ThreeDCard } from "@/app/components/ThreeDCard";
import { ThreeDCardSkeleton } from "@/app/components/ThreeDCardLoader";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const SingleEquipmentExercise = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const fetchSingleEquipmentExerciseData = async () => {
    try {
      const url =
        "https://exercisedb.p.rapidapi.com/exercises/equipment/assisted?limit=10&offset=0";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        },
      };
      const response = await fetch(url, options);
      const result = await response.json();
      setExercises(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSingleEquipmentExerciseData();
  }, []);

  const openModal = (exercise) => {
    setSelectedExercise(exercise);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExercise(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <CustomButton
        path={"/dashboard/equipments"}
        padding={"6px 16px"}
        fontSize={"14px"}
      >
        Back
      </CustomButton>
      <h1 className="text-3xl text-[--green-200] font-bold my-4 text-center">
        Assisted Equipment Exercises
      </h1>

      <div
        className="grid gap-2 lg:gap-6 mt-6 
        grid-cols-1 
        sm:grid-cols-1 
        lg:grid-cols-2 
        xl:grid-cols-2 
        2xl:grid-cols-3"
      >
        {exercises !== null || exercises?.length > 0
          ? exercises?.map((exercise, i) => (
              <ThreeDCard key={i} data={exercise} />
            ))
          : [1, 2, 3, 4, 5, , 6, 7].map((item) => {
              <ThreeDCardSkeleton key={item} />;
            })}
      </div>
      {/* <div
            key={exercise.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openModal(exercise)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={exercise.gifUrl}
                alt={exercise.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{exercise.name}</h2>
              <div className="flex justify-between items-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {exercise.equipment}
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {exercise.difficulty}
                </span>
              </div>
            </div>
          </div> */}

      {/* {isModalOpen && selectedExercise && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedExercise.name}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mb-4">
                <img
                  src={selectedExercise.gifUrl}
                  alt={selectedExercise.name}
                  className="w-full h-48 object-cover rounded"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Description:</h3>
                  <p>{selectedExercise.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">Body Part:</h3>
                    <p>{selectedExercise.bodyPart}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Category:</h3>
                    <p>{selectedExercise.category}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Difficulty:</h3>
                    <p>{selectedExercise.difficulty}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Equipment:</h3>
                    <p>{selectedExercise.equipment}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold">Target Muscles:</h3>
                  <p>{selectedExercise.target}</p>
                </div>

                <div>
                  <h3 className="font-semibold">Secondary Muscles:</h3>
                  <p>{selectedExercise.secondaryMuscles.join(", ")}</p>
                </div>

                <div>
                  <h3 className="font-semibold">Instructions:</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    {selectedExercise.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default SingleEquipmentExercise;
