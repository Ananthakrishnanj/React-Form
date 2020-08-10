import React from 'react';
import '../styles/slider.css';
import { useState } from 'react';

function Slider(props) {
    const [value, setValue] = useState(props.age);

    const changeParentValue = (value) => {
        setValue(value);
        props.changeParentValue(value);
    }
    
    return (
        <div className="slidecontainer">
            <input type="range" min={props.min} max={props.max} value={value} onChange={(event) => changeParentValue(event.target.value)} className="slider" id="myRange"/>            
        </div>
    )
}

export default Slider;
