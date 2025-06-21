"use client";

import React from "react";

export function AnimatedButtonSkeleton() {
  return (
    <div className="relative">
      {/* Base button skeleton */}
      <div
        className="
          h-10 w-full
          bg-gray-800 
          rounded-[1.75rem] 
          border border-gray-700
          animate-pulse
        "
      ></div>

      {/* Moving border effect skeleton */}
      <div
        className="
          absolute inset-0
          rounded-[1.75rem]
          overflow-hidden
          pointer-events-none
        "
      >
        <div
          className="
            absolute inset-0
            bg-gradient-to-r 
            from-transparent 
            via-gray-600 
            to-transparent
            opacity-20
            animate-[shimmer_2s_infinite]
          "
          style={{
            transform: "translateX(-100%)",
            animation: "shimmer 2s infinite",
          }}
        ></div>
      </div>
    </div>
  );
}
