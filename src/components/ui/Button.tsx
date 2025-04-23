import React from 'react';

interface Props {
    text: string;
    onClick: () => void;
    style?: React.CSSProperties;
    className?: string;
}

function Button ( { text, onClick, style, className }: Props) {

    return (
        <button
            onClick={onClick}
            style={style}
            className={className}
        >
            {text}
        </button>
    );
};

export default Button;