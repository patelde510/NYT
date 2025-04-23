import { JSX } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ConnectionsPage from "../pages/ConnectionsPage";
import ConnectionsGame from "../components/games/Connections/Connections"



const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/connections" element={<ConnectionsPage />} />
    <Route path="/connections-game" element={<ConnectionsGame />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
