"use client";

import { useRouter } from "next/navigation";
import useAuthListener from "@/hooks/useAuthListener";
import Loader from "../loader";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuthListener();
  const router = useRouter();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    router.push("/login");
    return null; // Prevent rendering
  }

  return children;
}
