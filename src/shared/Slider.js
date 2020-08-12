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
            <div className="d-flex justify-content-between">
                <div>13-19</div>
                <div>20-29</div>
                <div>30-45</div>
                <div>45 & Above</div>
            </div>      
        </div>
    )
}

export default Slider;
