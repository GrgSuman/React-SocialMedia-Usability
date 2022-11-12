import React from 'react'
import {NavLink} from 'react-router-dom'
import './Error.css'

const Error = ()=> {
    return (
        <div className="error_container">
<lottie-player src="https://assets7.lottiefiles.com/packages/lf20_g3epl9yu.json"  background="transparent"  speed="1"  style={{"width":"300px","height":"300px"}}  loop  autoplay></lottie-player>
            <h1><NavLink to="/">Go to Home</NavLink></h1>
            
        </div>
    )
}

export default Error
