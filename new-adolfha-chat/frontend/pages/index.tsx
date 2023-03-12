import { useState } from 'react';
import { User } from "firebase/auth";
import { auth } from "@/firebase";
import AuthPage from './AuthPage';
import ChatsPage from "./ChatsPage"


export default function Home() {
  const [user, setUser] = useState<User | null>();
  auth.onAuthStateChanged((user) => setUser(user));

  if (user === undefined) {
    return <div/>
  } else if (user === null) {
    return (
      <AuthPage />
    );
  } else {
    return (
      <ChatsPage user={user}/>
    )
  }
}
