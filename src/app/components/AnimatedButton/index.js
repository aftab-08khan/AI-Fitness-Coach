"use client";
import React from "react";
import { Button } from "../ui/moving-border";

export function AnimatedButton({ children }) {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-[#39ff14] dark:bg-slate-900 text-black border-[#39ff14] dark:border-slate-800 uppercase font-semibold hover:bg-[#4dff2c] "
      >
        {children}
      </Button>
    </div>
  );
}
