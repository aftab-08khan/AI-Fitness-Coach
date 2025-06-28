import React from "react";
import DashboardUI from "../components/dashboardUI";
import ProtectedRoute from "../components/ProtectedRoute";

const DashboardLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      <DashboardUI>{children}</DashboardUI>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
