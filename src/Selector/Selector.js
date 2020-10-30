import React from 'react'

const selector = props => {
    return (
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary"
            
            onClick={() => {props.change(0)}}
            
            
            >Body</button>
            <button type="button" class="btn btn-secondary"
            onClick={() => {props.change(1)}}>Glass</button>
            <button type="button" class="btn btn-secondary"
            onClick={() => {props.change(2)}}>Lips</button>
            <button type="button" class="btn btn-secondary"
            onClick={() => {props.change(3)}}>Mousetaches</button>
        </div>
    )
}

export default selector;
