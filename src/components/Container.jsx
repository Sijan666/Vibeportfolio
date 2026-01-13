import React from 'react';

const Container = ({ children, className }) => {
    return (
        <div className={`max-w-[1500px] w-full mx-auto px-6 md:px-12 ${className || ''}`}>
            {children}
        </div>
    );
};

export default Container;