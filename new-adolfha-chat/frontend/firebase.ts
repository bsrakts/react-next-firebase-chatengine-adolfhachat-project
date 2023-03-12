import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAykbdHyuQwiUH-1GqARe9Mliwi2o0Sf5c",
  authDomain: "adolfha-chat.firebaseapp.com",
  projectId: "adolfha-chat",
  storageBucket: "adolfha-chat.appspot.com",
  messagingSenderId: "625518102884",
  appId: "1:625518102884:web:9508e86a318da155a0d271"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);