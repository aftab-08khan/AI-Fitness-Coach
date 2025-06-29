"use client";

import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import AuthForm from "../components/AuthForm.js";
import { auth, googleProvider } from "../../../lib/firebase.js";

const Login = () => {
  const router = useRouter();
  console.log(googleProvider, "googleProvider");

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    // Add input validation
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed in:", userCredential.user);
      router.push("/dashboard");
    } catch (error) {
      console.error("Sign-In Error:", error.code, error.message);
      alert(getUserFriendlyError(error.code));
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google sign-in success:", result.user);
      router.push("/dashboard");
    } catch (error) {
      console.error("Google Sign-In Error:", error.code, error.message);
      alert(getUserFriendlyError(error.code));
    }
  };

  // Helper function for user-friendly error messages
  const getUserFriendlyError = (errorCode) => {
    switch (errorCode) {
      case "auth/invalid-email":
        return "Invalid email address";
      case "auth/user-disabled":
        return "Account disabled";
      case "auth/user-not-found":
      case "auth/wrong-password":
        return "Invalid email or password";
      case "auth/network-request-failed":
        return "Network error. Please check your connection";
      case "auth/popup-closed-by-user":
        return "Sign in cancelled";
      default:
        return "Login failed. Please try again";
    }
  };

  return (
    <div className="h-screen bg-black">
      <AuthForm
        type="login"
        onSubmit={handleSubmit}
        onGoogleSignIn={handleGoogleSignIn}
      />
    </div>
  );
};

export default Login;
