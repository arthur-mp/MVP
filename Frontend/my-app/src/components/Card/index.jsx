import React from 'react';
import './style.css';
import CardFigma from '../../assets/photo_size_select_actual_24px_outlined.svg';



function Card(){
    return(
        <div className="cards-container">
            <img className="Image" src={CardFigma} alt="Card Destaques"  ></img>
        </div>
    )
}

export default Card;    