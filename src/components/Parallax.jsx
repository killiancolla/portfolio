// src/components/Parallax.js
import React, { useEffect } from 'react';
import Rellax from 'rellax';

const Parallax = ({ speed, children, className }) => {
    useEffect(() => {
        new Rellax('.rellax');
    }, []);

    return (
        <div className={`rellax ${className}`} data-rellax-speed={speed}>
            {children}
        </div>
    );
};

export default Parallax;
