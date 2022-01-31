import React from "react";
import LoginComponent from "../component/LoginComponent";
import PasswordReset from "../component/PasswordReset";
import { Routes, Route } from "react-router-dom";

import "./LoginPage.css";
const LoginPage = () => {
  return (
    <div className="entry-page bg-info ">
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/password_reset" element={<PasswordReset />} />
      </Routes>
    </div>
  );
};

export default LoginPage;
