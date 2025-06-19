"use client";
import { useRouter } from "next/navigation.js";
import { auth, googleProvider } from "../../../lib/firebase.js";
import AuthForm from "../components/AuthForm.js";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const SignUp = () => {
  const router = useRouter();
  const handleSubmit = async (e, fullName, email, password) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/login");
    } catch (error) {
      console.error("Error", error);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      console.log("heello");

      await signInWithPopup(auth, googleProvider);
      router.push("/login");
    } catch (error) {
      console.error("Google sign-in error:", error.message);
    }
  };
  return (
    <div className="h-screen bg-black">
      <AuthForm
        type={"Sign Up"}
        onSubmit={handleSubmit}
        onGoogleSignIn={handleGoogleSignIn}
      />
    </div>
  );
};

export default SignUp;
