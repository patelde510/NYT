import React from 'react';
import "./css/Tile.css"

interface TileProps {
    word: string;
    isSelected: boolean;
    onClick: () => void;
}

const Tile: React.FC<TileProps> = ({ word, isSelected, onClick }) => {
    return (
        <button
            className={`tile ${isSelected ? 'selected' : ''}`}
            onClick={onClick}
        >
            {word}
        </button>
    );
};

export default Tile;