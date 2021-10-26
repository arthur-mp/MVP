import React from "react";
import "./style.css";
import Slider from "../Slider/index.jsx";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

const sliderData = [
    {image: img1},
    {image: img2},
    {image: img3}
];

function Releases(){

    return(
        <section className="releases-Section">
            <h1 className="title">Releases</h1>
            <Slider sliderData={sliderData}/>
        </section>
    );
};

export default Releases;