import { signOut } from "firebase/auth";
import { useContext } from "react";
import { Context } from "../..";
import { useAuthState } from "react-firebase-hooks/auth";

export const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2>Navbar</h2>
      {user && <button onClick={() => signOut(auth)}>signOut</button>}
    </div>
  );
};
