import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, Dashboard, AuthPage, PageNotFound } from "../pages";
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
    <Route path="/test" element={<Dashboard />} />

    {/* 404 Page */}
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default MainRoutes;
