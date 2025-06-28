"use client";
import { useRouter } from "next/navigation.js";
import AuthForm from "../components/AuthForm.js";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../../lib/firebase.js";

const Login = () => {
  const router = useRouter();
  const provider = googleProvider;

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div className="h-screen bg-black">
      <AuthForm
        type={"Login"}
        onSubmit={handleSubmit}
        onGoogleSignIn={handleGoogleSignIn}
      />
    </div>
  );
};

export default Login;
