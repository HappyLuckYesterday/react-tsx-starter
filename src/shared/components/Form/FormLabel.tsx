import React from 'react';

export const FormLabel = ({ children, className, htmlFor }) => <label htmlFor={htmlFor} className={className}>{children}</label>;
