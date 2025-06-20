import React from "react";
import DashboardUI from "../components/dashboardUI";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <DashboardUI>{children}</DashboardUI>
    </div>
  );
};

export default DashboardLayout;
