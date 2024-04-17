import { BrowserRouter } from "react-router-dom";
import { Navbar, Routing, Loader } from "./components";
import { useContext } from "react";
import { Context } from ".";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);
  return (
    <div className="App">
      <BrowserRouter>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <Routing />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
