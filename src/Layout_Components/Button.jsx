import React from 'react';

const Button = ({children,className}) => {
    return (<button className={`bg-info text-[#FFF] ${className}`}>{children}</button>
    );
};

export default Button;