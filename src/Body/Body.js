import React from 'react'
import './Body.css';

const body = props => {
    return (
        <div id="person-body">
            <img src={props.adr} alt="body image"></img>
        </div>
    )
}

export default body