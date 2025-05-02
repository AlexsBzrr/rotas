import { Routes, Route, Navigate } from "react-router-dom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import HomePage from "../pages/HomePage";
import PagesLayout from "../layouts/PageLayout";
import Usuario from "../pages/Usuario";
import Usuarios from "../pages/Usuarios";
import NotFound from "../pages/NotFound";

const PathsRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PagesLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/usuario/:id/:nome" element={<Usuario />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default PathsRoutes;
