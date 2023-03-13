import { auth } from "@/firebase";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import {VscGithubInverted} from "react-icons/vsc";

export default function AuthPage() {
  const onClick = () => {
    signInWithRedirect(auth, new GoogleAuthProvider());
  };

  return (
    <div className="page">
      <div className="logo">👋 💬 🤖 </div>
      <div className="text">Welcome to <a style={{ color: "#ff00d7" }}>AdolfhaChat</a></div>
      <div className="text-middle" style={{ paddingBottom: "16px" }}>
        Log in / Sign Up with your Google account and <a style={{ color: "#ff00d7" }}>Enjoy!</a>
      </div>
      <button className="button" onClick={onClick}>
        Log In
      </button> <button className="button" onClick={onClick}>
        Sign Up
      </button>
      <div className="text-middle-info" style={{ paddingTop: "16px" }}>
        Created By <a style={{ color: "#0c34e7" }}>Büşra Aktaş</a>
      </div>
      <div className="github-info">
        <a href="https://github.com/bsrakts/react-next-firebase-chatengine-adolfhachat-project" className="github-link">
          <VscGithubInverted
            size="2rem" />
        </a>
        <br/>
        <a className="hover-text">
          Go Repo!
        </a>
      </div>
      </div>
  );
}