"use client";

import { useRouter } from "next/navigation";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import AuthForm from "../components/AuthForm.js";
import { auth, googleProvider } from "../../../lib/firebase.js";

const Login = () => {
  const router = useRouter();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      console.error("Email/Password Sign-In Error:", error.message);
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/dashboard");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="h-screen bg-black ">
      <AuthForm
        type="login"
        onSubmit={handleSubmit}
        onGoogleSignIn={handleGoogleSignIn}
      />
    </div>
  );
};

export default Login;
