import React from 'react';
import "./css/CompleteTile.css"

interface CompleteTileProps {
    word: string;
}

const CompleteTile: React.FC<CompleteTileProps> = ({ word }) => {
    return (
        <button disabled className="complete">
            {word}
        </button>
    );
};

export default CompleteTile;