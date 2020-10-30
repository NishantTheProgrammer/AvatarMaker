import React from 'react'
import './Body.css';

const body = props => {
    return (
        <div id="person-body"
            style={{
                backgroundImage: `url(${props.bodyImg})`
            }}
        >
            <div id="structure" style={{
                backgroundImage: `url('./Resources/structure.png')`
                }}>
            
                <img className="faceEle" id="glass" src={props.glassImg}></img>
                <img className="faceEle" id="mousetach" src={props.mousetachImg}></img>
                <img className="faceEle" id="lip" src={props.lipImg}></img>
            
            </div>

    
        </div>
    )
}

export default body