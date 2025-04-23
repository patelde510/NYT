import React from 'react';

interface CategoryProps {
    name: string;
    items: string[];
    onSelect: (item: string) => void;
}

const Category: React.FC<CategoryProps> = ({ name, items, onSelect }) => {
    return (
        <div className="category">
            <h3>{name}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index} onClick={() => onSelect(item)}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Category;