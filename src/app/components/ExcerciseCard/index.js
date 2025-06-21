import Image from "next/image";

const exerciseData = [
  {
    bodyPart: "waist",
    category: "strength",
    description:
      "The 3/4 sit-up is an abdominal exercise performed with body weight. It involves curling the torso up to a 45-degree angle, engaging the abs, hip flexors, and lower back. This movement is commonly used to build core strength and stability.",
    difficulty: "beginner",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/IOpAYqzdlr9IUT",
    id: "0001",
    instructions: [
      "Lie flat on your back with your knees bent and feet flat on the ground.",
      "Place your hands behind your head with your elbows pointing outwards.",
      "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
      "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
    name: "3/4 sit-up",
    secondaryMuscles: ["hip flexors", "lower back"],
    target: "abs",
  },
  {
    bodyPart: "waist",
    category: "strength",
    description:
      "The 45° side bend is a bodyweight exercise targeting the abdominal muscles, particularly the obliques. It involves bending the torso to the side while standing, engaging the core for stability and control.",
    difficulty: "beginner",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/MC9ah8eQjGxWqY",
    id: "0002",
    instructions: [
      "Stand with your feet shoulder-width apart and your arms extended straight down by your sides.",
      "Keeping your back straight and your core engaged, slowly bend your torso to one side, lowering your hand towards your knee.",
      "Pause for a moment at the bottom, then slowly return to the starting position.",
      "Repeat on the other side.",
      "Continue alternating sides for the desired number of repetitions.",
    ],
    name: "45° side bend",
    secondaryMuscles: ["obliques"],
    target: "abs",
  },
];

export default function ExerciseCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
      {exerciseData.map((exercise) => (
        <div
          key={exercise.id}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden"
        >
          <img
            src={exercise.gifUrl}
            alt={exercise.name}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">
              {exercise.name}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              {exercise.description}
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              <strong>Target:</strong> {exercise.target}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              <strong>Difficulty:</strong> {exercise.difficulty}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              <strong>Equipment:</strong> {exercise.equipment}
            </div>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
              {exercise.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
