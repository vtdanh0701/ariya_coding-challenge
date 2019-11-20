import React from 'react'
import './Header.css'

const Header = (props) => {
    return(
            <div className='form-header'>
                {props.title}
            </div>
    )
}

export default Header;