import React from 'react';
import "../css/global.css";

const TagList = ({ tags, className }) => {
    return (
        <div className={`d-flex flex-wrap `}>
       
            {tags.map((tag, index) => (
                <div key={index} className={`tag ${className}`}>
                    {tag}
                </div>
            ))}
        </div>
    );
};

export default TagList;