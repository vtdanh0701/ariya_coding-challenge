import React from 'react';
import './Button.css';

const Button = (props) => {
    return(
        <div className='form-group'>
            <button
                className={props.isActive?'btn active':'btn'}
                onClick={props.isActive?props.onClick: ''}
                >
                {props.title}
            </button>
        </div>
            
        
    )
}
export default Button;