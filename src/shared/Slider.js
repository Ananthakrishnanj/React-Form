import React, { useEffect } from 'react';
import '../styles/slider.css';
import { useState } from 'react';

function Slider(props) {    

    const changeParentValue = (value) => {        
        props.changeParentValue(value);
    }
    
    return (
        <div className="slidecontainer">
            <input type="range" min={props.min} max={props.max} value={props.age} onChange={(event) => changeParentValue(event.target.value)} className="slider" id="myRange"/>            
        </div>
    )
}

export default Slider;
