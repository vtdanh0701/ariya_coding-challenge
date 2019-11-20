import React from 'react';
import './Prompt.css';

import error from '../../assets/img/error.png'

const Success = (props) => {
    return(
        <div className='prompt success'>
            <i class="fas fa-check"></i> Login Success! Hello {props.userName}
        </div>
    )
}

const Failed = () => {
    return(
        <div className='prompt'>
           <img src={error}/> Invalid email and/or password. Don't have an account? <a className='link'>Register</a>
        </div>
    )
}

export {Success, Failed};