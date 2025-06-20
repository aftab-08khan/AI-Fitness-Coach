import Link from "next/link";
import React from "react";

const CustomButton = ({
  path,
  children,
  fontSize,
  padding,
  color,
  hoverColor,
}) => {
  return (
    <Link
      href={path}
      type="button"
      style={{ padding: padding && padding, fontSize: fontSize && fontSize }}
      className="inline-flex items-center rounded-md bg-[#33e612] px-8 py-3 sm:px-10 sm:py-3 md:px-12 md:py-4 text-base sm:text-lg md:text-xl font-semibold text-white shadow-sm hover:bg-[#39ff14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39ff14] pulse"
    >
      {children}
    </Link>
  );
};

export default CustomButton;
