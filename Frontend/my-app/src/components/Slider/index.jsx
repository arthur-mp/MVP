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
                       <iframe width="500px" height="335" src={`https://www.youtube.com/embed/${slide.keyVideo[0]}`} frameBorder="0" 
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                       </iframe>
                       </div>
                       <div className="releases-texts">
                          <h1>{slide.original_title}</h1>
                          <span className="movie-synopsis" ><strong>Sinopse:</strong>{slide.overview}</span>
                          <span className="movie-title-original"><strong>Original title: </strong>{slide.original_title} </span>
                          <span className="movie-title-original"><strong>Genres:</strong> {slide.genre_names}</span>
                          <span className="movie-title-original"><strong>Release:</strong> {slide.release_date}</span>
                          <span className="movie-title-original"><strong>Adult content:</strong> {slide.adult ? "No" : "Yes"}</span>
                          <span className="runtime"><strong>Runtime: </strong>{`${parseInt(slide.runtime / 60)}h ${slide.runtime % 60}min`}</span>
                          <span className="movie-title-original"><strong>Avaliation:</strong></span>
                          <span className="avaliation">
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Typography component="legend"></Typography>
                                <Rating  value={slide.vote_average / 2} readOnly />
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