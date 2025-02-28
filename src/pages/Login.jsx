import React, { useEffect } from "react";

import Login from "../components/Login/Login";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-screen bg-gray-50">
      <Login />
    </div>
  );
};
export default LoginPage;
