import { auth } from "@/firebase";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

export default function AuthPage() {
  const onClick = () => {
    signInWithRedirect(auth, new GoogleAuthProvider());
  };

  return (
    <div className="page">
      <div className="logo">👋 💬 🤖 </div>
      <div className="text">Welcome to AdolfhaChat</div>
      <div className="text-middle" style={{ paddingBottom: "16px" }}>
        Log in / Sign Up with your Google account! :)
      </div>
      <button className="button" onClick={onClick}>
        Log In
      </button> <button className="button" onClick={onClick}>
        Sign Up
      </button>
    </div>
  );
}