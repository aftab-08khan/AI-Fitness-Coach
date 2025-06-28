"use client";

import { useRouter } from "next/navigation";
import useAuthListener from "@/hooks/useAuthListener";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuthListener();
  const router = useRouter();

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (!user) {
    router.push("/login");
    return null; // Prevent rendering
  }

  return children;
}
