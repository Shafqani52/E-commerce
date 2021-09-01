import React from 'react';
import './form-input.styles.scss';

export default function FormInput({handleClick,handleChange,label, ...otherProps}){
    return (
        <div className="input_wrap">
            <input className='form-input' {...otherProps} onClick={handleClick} onChange={handleChange}/>
            {
                label ? <label className={`${otherProps.shrink ? 'shrink' : ''} input-label`}>{label}</label> : null
            }
        </div>
    )
}