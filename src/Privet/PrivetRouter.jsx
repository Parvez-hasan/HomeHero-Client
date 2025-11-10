import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../Pages/Loading";

const PrivetRouter = ({children}) => {

  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  //console.log(user);
 
  if (loading) {
    return <Loading></Loading>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location.pathname }} />;
};

export default PrivetRouter;
