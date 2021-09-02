import React from 'react';
import './custom-button.styles.scss';

export default function CustomButton ({children,bg_color}){
    return (
        <button className={`${bg_color} custom-button`}>{children}</button>
    )
}