import { Routes, Route } from "react-router-dom";
import React from "react";
import UserFormPage from "./Pages/UserFormPage";
import TodoHomePage from "./Pages/TodoHomePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<UserFormPage />} />
      <Route path="/home" element={<TodoHomePage />} />
    </Routes>
  );
};

export default Router;
