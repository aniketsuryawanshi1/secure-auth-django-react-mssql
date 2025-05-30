import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LandingPage, Dashboard, AuthPage } from "../pages";
import PrivateRoute from "./PrivateRoute";

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<AuthPage />} />
    <Route path="/register" element={<AuthPage />} />
    <Route
      path="/dashboard"
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    />
    <Route path="*" element={<Navigate to="/login" />} />
  </Routes>
);

export default MainRoutes;
