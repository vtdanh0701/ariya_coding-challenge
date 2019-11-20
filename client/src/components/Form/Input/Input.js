import React, {useState} from 'react';
import './Input.css'



function Input(props){
    // set type for password or email
    const [type,setType] = useState(props.type);
    const [isShow,setIsShow] = useState(false);
    
    const [message,setMessage] = useState('')
    const id = props.type;
    
    // show and hide password
    const togglePassword = () =>{
        setIsShow(!isShow);
        setType(isShow?'password':'text');
    }


    return(
        <div className='form-group'>
            <div className={props.value.length > 0 ? 'label':'label hidden'}>
                {props.label}
            </div> 
            <input
                className='form-input'
                id={props.id}
                type={type}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />

            { id == "password" &&
            <div className={props.value.length > 0 ? 'show':'show hidden'}
                onClick={togglePassword}
               >
                {isShow?'HIDE':'SHOW'}
            </div> }
            
        </div>
        
    )
}

export default Input;