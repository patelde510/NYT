import React from "react";
import "/index.css";
import "./css/ConnectionsPage.css";
import Button from "../components/ui/Button";
import connectionsImage from "./assets/connections.png";
import { useNavigate } from "react-router-dom";

const ConnectionsPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="connections-page">
      <img
        className="connections-image"
        src={connectionsImage}
        alt="Connections"
      />
      <h1 className="title">Connections</h1>
      <p className="description">Group words that share a common thread.</p>
      <Button
        text="Play"
        onClick={() => navigate("/connections-game")}
        className="button"
      />
    </div>
  );
};

export default ConnectionsPage;
