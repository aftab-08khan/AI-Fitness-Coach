"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardSkeleton() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black relative group/card transition-all duration-300 dark:bg-black dark:border-white/[0.1] border-black/[0.05] w-auto md:w-[24rem] rounded-lg p-4 border h-full">
        {/* Title Skeleton */}
        <CardItem translateZ="20">
          <div className="h-6 w-3/4 bg-gray-800 rounded-lg animate-pulse"></div>
        </CardItem>

        {/* Category Skeleton */}
        <div className="flex items-center gap-1 mt-3">
          <CardItem translateZ="30">
            <div className="h-4 w-16 bg-gray-800 rounded animate-pulse"></div>
          </CardItem>
          <CardItem translateZ="10">
            <div className="h-4 w-24 bg-gray-800 rounded animate-pulse"></div>
          </CardItem>
        </div>

        {/* Name Skeleton */}
        <div className="flex items-center gap-1 mt-2">
          <CardItem translateZ="30">
            <div className="h-4 w-16 bg-gray-800 rounded animate-pulse"></div>
          </CardItem>
          <CardItem translateZ="10">
            <div className="h-4 w-32 bg-gray-800 rounded animate-pulse"></div>
          </CardItem>
        </div>

        {/* Image Skeleton */}
        <CardItem translateZ="40" className="w-full mt-4">
          <div className="h-48 w-full bg-gray-800 rounded-lg animate-pulse"></div>
        </CardItem>

        {/* Button Skeleton */}
        <div className="flex justify-end items-center mt-10">
          <CardItem translateZ={20}>
            <div className="h-8 w-24 bg-[--green-light-300] dark:bg-gray-800 rounded-md animate-pulse"></div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
