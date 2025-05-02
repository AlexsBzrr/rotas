import { Routes, Route, Navigate } from "react-router-dom";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import HomePage from "../src/pages/HomePage";
import PagesLayout from "../src/layouts/PageLayout";
import React from "react";
const PathsRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PagesLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
        </Route>
        <Route
          path="*"
          element={
            <div className="w-full h-screen flex justify-center items-center ">
              <span
                style={{ fontSize: "2.5rem" }}
                className=" text-primary text-9xl font-bold"
              >
                404 - Página não encontrada
              </span>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default PathsRoutes;
