import React from 'react';
import './style.css';



function Card(props){
    return(
        <div className="cards-container">
            <img  src={props.img} alt={props.alt} ></img>
        </div>
    )
}

export default Card; 