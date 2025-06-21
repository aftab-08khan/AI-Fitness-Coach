// "use client";

// import React from "react";
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

// export function ThreeDCard({ data }) {
//   const { bodyPart, category, gifUrl, name } = data;
//   return (
//     <CardContainer className="inter-var">
//       <CardBody className="bg-black relative group/card transition-all duration-300 dark:hover:shadow-lg dark:hover:shadow-emerald-500/[0.05] dark:bg-black dark:border-white/[0.1] border-black/[0.05] w-auto md:w-[24rem] rounded-lg p-4 border h-full">
//         <CardItem
//           translateZ="20"
//           className="text-lg capitalize tracking-wider font-semibold text-[--green-light-900]  dark:text-white"
//         >
//           {bodyPart}
//         </CardItem>
//         <div className="items-center gap-1 flex">
//           <CardItem
//             as="b"
//             translateZ="30"
//             className="text-[--green-light-600] text-md mt-2 dark:text-neutral-300"
//           >
//             Category :
//           </CardItem>
//           <CardItem
//             as="p"
//             translateZ="10"
//             className="text-[--green-light-900] capitalize text-sm mt-2 dark:text-neutral-300"
//           >
//             {category}
//           </CardItem>
//         </div>
//         <div className="items-center gap-1 flex">
//           <CardItem
//             as="b"
//             translateZ="30"
//             className="text-[--green-light-600] text-md mt-2 dark:text-neutral-300"
//           >
//             Name :
//           </CardItem>
//           <CardItem
//             as="p"
//             translateZ="10"
//             className="text-[--green-light-900] capitalize text-sm mt-2 dark:text-neutral-300"
//           >
//             {name}
//           </CardItem>
//         </div>
//         <CardItem translateZ="40" className="w-full mt-4">
//           <img
//             src={gifUrl}
//             height="1000"
//             width="1000"
//             className="h-[80%] w-full object-cover rounded-lg group-hover/card:shadow-md"
//             alt="thumbnail"
//           />
//         </CardItem>
//         <div className="flex justify-end items-center mt-10">
//           {/* <CardItem
//             translateZ={20}
//             as="a"
//             href="https://twitter.com/mannupaaji"
//             target="__blank"
//             className="px-3 py-1.5 rounded-md text-xs font-normal dark:text-white"
//           >
//             Try now →
//           </CardItem> */}
//           <CardItem
//             translateZ={20}
//             as="button"
//             className="px-3 py-1.5 rounded-md bg-[--green-light-300] dark:bg-white dark:text-black text-white text-xs font-semibold"
//           >
//             More Details
//           </CardItem>
//         </div>
//       </CardBody>
//     </CardContainer>
//   );
// }
"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { motion, AnimatePresence } from "framer-motion";

export function ThreeDCard({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    bodyPart,
    category,
    description,
    difficulty,
    equipment,
    gifUrl,
    id,
    instructions,
    name,
    secondaryMuscles,
    target,
  } = data;

  return (
    <>
      <CardContainer className="inter-var">
        <CardBody className="bg-black relative group/card transition-all duration-300 dark:hover:shadow-lg dark:hover:shadow-emerald-500/[0.05] dark:bg-black dark:border-white/[0.1] border-black/[0.05] w-auto md:w-[24rem] rounded-lg p-4 border h-full">
          <CardItem
            translateZ="20"
            className="text-lg capitalize tracking-wider font-semibold text-[--green-light-900]  dark:text-white"
          >
            {bodyPart}
          </CardItem>
          <div className="items-center gap-1 flex">
            <CardItem
              as="b"
              translateZ="30"
              className="text-[--green-light-600] text-md mt-2 dark:text-neutral-300"
            >
              Category :
            </CardItem>
            <CardItem
              as="p"
              translateZ="10"
              className="text-[--green-light-900] capitalize text-sm mt-2 dark:text-neutral-300"
            >
              {category}
            </CardItem>
          </div>
          <div className="items-center gap-1 flex">
            <CardItem
              as="b"
              translateZ="30"
              className="text-[--green-light-600] text-md mt-2 dark:text-neutral-300"
            >
              Name :
            </CardItem>
            <CardItem
              as="p"
              translateZ="10"
              className="text-[--green-light-900] capitalize text-sm mt-2 dark:text-neutral-300"
            >
              {name}
            </CardItem>
          </div>
          <CardItem translateZ="40" className="w-full mt-4">
            <img
              src={gifUrl}
              height="1000"
              width="1000"
              className="h-[80%] w-full object-cover rounded-lg group-hover/card:shadow-md"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-end items-center mt-10">
            <CardItem
              translateZ={20}
              as="button"
              onClick={() => setIsModalOpen(true)}
              className="px-3 py-1.5 rounded-md bg-[--green-light-300] dark:bg-white dark:text-black text-white text-xs font-semibold hover:bg-[--green-light-400] transition-colors"
            >
              More Details
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative bg-black dark:bg-black dark:border-white/[0.1] border-black/[0.05] rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="space-y-6 mt-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[--green-light-900] dark:text-white capitalize">
                      {name}
                    </h2>
                    <p className="text-gray-300 mt-2">{description}</p>
                  </div>
                  <div className="sm:w-48 sm:h-48 w-full h-3/4 rounded-lg overflow-hidden text-center">
                    <img
                      src={gifUrl}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-900 rounded-lg p-4">
                    <h3 className="text-[--green-light-600] font-semibold mb-2">
                      Exercise Details
                    </h3>
                    <div className="space-y-2">
                      <p>
                        <span className="text-[--green-light-600]">
                          Body Part:
                        </span>{" "}
                        <span className="text-white capitalize">
                          {bodyPart}
                        </span>
                      </p>
                      <p>
                        <span className="text-[--green-light-600]">
                          Category:
                        </span>{" "}
                        <span className="text-white capitalize">
                          {category}
                        </span>
                      </p>
                      <p>
                        <span className="text-[--green-light-600]">
                          Target:
                        </span>{" "}
                        <span className="text-white capitalize">{target}</span>
                      </p>
                      <p>
                        <span className="text-[--green-light-600]">
                          Secondary Muscles:
                        </span>{" "}
                        <span className="text-white capitalize">
                          {secondaryMuscles.join(", ")}
                        </span>
                      </p>
                      <p>
                        <span className="text-[--green-light-600]">
                          Difficulty:
                        </span>{" "}
                        <span className="text-white capitalize">
                          {difficulty}
                        </span>
                      </p>
                      <p>
                        <span className="text-[--green-light-600]">
                          Equipment:
                        </span>{" "}
                        <span className="text-white capitalize">
                          {equipment}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-4">
                    <h3 className="text-[--green-light-600] font-semibold mb-2">
                      Instructions
                    </h3>
                    <ol className="list-decimal list-inside space-y-2 text-white">
                      {instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
