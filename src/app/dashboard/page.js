"use client";
import useAuthListener from "@/hooks/useAuthListener";
import React from "react";
import { UserProfileCard } from "../components/userProfileCard.js";
import { useTheme } from "@/hooks/themeContext.js";

const Dashboard = () => {
  const { userData } = useTheme();
  return <div>{userData && <UserProfileCard data={userData} />}</div>;
};

export default Dashboard;
