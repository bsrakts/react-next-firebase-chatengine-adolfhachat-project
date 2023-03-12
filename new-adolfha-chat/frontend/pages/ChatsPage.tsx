import { auth } from "@/firebase";
import { signOut, User } from "firebase/auth";
import { PrettyChatWindow } from "react-chat-engine-pretty";

interface ChatProps {
  user: User;
}

export default function Page(props: ChatProps) {
  return (
    <div style={{ height: "100vh" }}>
      <button
        style={{ position: "absolute", bottom: "20px", left: "70px" , padding: "10px 20px", color: "white", background:"rgb(24, 144, 255)", border: "1px",}}
        onClick={() => signOut(auth)}
      >
        Sign Out
      </button>
      <PrettyChatWindow
        projectId="bb2c09b7-1e46-4447-aeb9-0cdd073a2fe0"
        username={props.user.email || ""}
        secret={props.user.uid}
        style={{ height: "100%" }}
      />
    </div>
  );
}
