import { Route, Navigate, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes";
import { chatPage, loginPage } from "../../constants";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";
import { Context } from "../..";

export const Routing = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? (
        <div>
          <Routes>
            {privateRoutes.map(({ path, component }) => {
              return <Route path={path} Component={component} key={path} />;
            })}
          </Routes>
          <Navigate to={chatPage} />
        </div>
      ) : (
        <div>
          <Routes>
            {publicRoutes.map(({ path, component }) => {
              return <Route path={path} Component={component} key={path} />;
            })}
          </Routes>
          <Navigate to={loginPage} />
        </div>
      )}
    </div>
  );
};
