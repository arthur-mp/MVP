import React, {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import "./style.css";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



function Slider({sliderData}){
    
    const [current, setCurrent] = useState(0);
    const length = sliderData.length;  

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }


    if(!Array.isArray(sliderData) || sliderData.length <= 0){
        return null;
    }

    return(
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {sliderData.map((slide, index) => {
                return(
                    <div className={index === current ? 'slide active' : 'slide'} key= {index}>
                     {index === current && (
                       <>
                       <div className="image">
                       <iframe width="500px" height="335" src={`https://www.youtube.com/embed/6D-A6CL3Pv8`} frameBorder="0" 
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                       </iframe>
                       </div>
                       <div className="releases-texts">
                          <h1>Nome do Filme</h1>
                          <span className="movie-synopsis" ><strong>Sinopse:</strong> {"Synopsis: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est nulla, vulputate ac mollis in, semper eu massa. Ut ut massa nibh. Pellentesque est tellus, mattis varius metus quis, pellentesque euismod risus. Nullam lacinia ligula sit amet tellus eleifend, eget tincidunt neque fringilla. Mauris sem orci, dictum id ligula in, pellentesque elementum dui. Nunc vestibulum sem nec nisi ultrices aliquet. Donec nibh ligula,"}</span>
                          <span className="movie-title-original"><strong>Original title: </strong> {"Title"} </span>
                          <span className="movie-title-original"><strong>Genres:</strong> {" Genre 1 | Genre 2"}</span>
                          <span className="movie-title-original"><strong>Release:</strong> {" DD/MM/AAAA"}</span>
                          <span className="movie-title-original"><strong>Adult content:</strong> {" Yes/No"}</span>
                          <span className="runtime"><strong>Runtime: </strong>{" {X}h {YY}m"}</span>
                          <span className="movie-title-original"><strong>Avaliation:</strong></span>
                          <span className="avaliation">
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Typography component="legend"></Typography>
                                <Rating  value={3} readOnly />
                            </Box> 
                          </span>
                       </div>
                       </>
                      )} 
                    </div>
                )
            })}
        </section>
    )

}

export default Slider;