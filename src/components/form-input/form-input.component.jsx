import React from 'react';
import './form-input.styles.scss';

export default function FormInput({handleClick,handleChange,label, ...otherProps}){
    return (
        <div className="input_wrap">
            <input className='form-input' {...otherProps} onChange={handleChange}/>
            {
                label ? <label className='input-label'>{label}</label> : null
            }
        </div>
    )
}