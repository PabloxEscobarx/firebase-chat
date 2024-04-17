import { useContext } from "react";
import { Context } from "../..";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const Login = () => {
  const { auth } = useContext(Context);

  const signIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>login</h1>
      <button onClick={signIn}>Click me</button>
    </div>
  );
};
