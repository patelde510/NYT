import React from "react";
import "./css/CompleteTile.css";

interface CompleteTileProps {
  word: string;
  tileColor: string | undefined;
}

const CompleteTile: React.FC<CompleteTileProps> = ({
  word,
  tileColor,
}: CompleteTileProps) => {
  return (
    <button
      disabled
      className="complete"
      style={{ backgroundColor: tileColor }} // Apply the color dynamically
    >
      {word}
    </button>
  );
};

export default CompleteTile;
