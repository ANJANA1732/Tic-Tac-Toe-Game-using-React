import React from 'react';

const Box = ({ value, onClick }) => {
    return (
        <div className="boxes" onClick={onClick}>
            {value && <img src={value} alt="icon" />}
        </div>
    );
};

export default Box;
