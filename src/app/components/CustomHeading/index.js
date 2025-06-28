import React from "react";

const CustomHeading = ({ children }) => {
  return (
    <h2 className="text-3xl font-bold text-[--green-light-950] dark:text-white mb-6 tracking-wide ">
      {children}
    </h2>
  );
};

export default CustomHeading;
