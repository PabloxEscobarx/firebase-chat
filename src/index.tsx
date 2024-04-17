import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createContext } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firestore";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyC6RikT3w3cPT_BwGJ-NSDJHLzjQIKLxMo",
  authDomain: "chat-react-f24f6.firebaseapp.com",
  projectId: "chat-react-f24f6",
  storageBucket: "chat-react-f24f6.appspot.com",
  messagingSenderId: "125745287728",
  appId: "1:125745287728:web:1b2116a9d728492616d3f5",
  measurementId: "G-JZ6CW76T1Y",
}); // in real project it must be in .env

const auth = getAuth();
const firestore = getFirestore(app);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
export const Context = createContext<any>(null);
root.render(
  <Context.Provider
    value={{
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>
);
