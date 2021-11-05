import React, {useState, useEffect}  from "react";
import "./style.css";
import Slider from "../Slider/index.jsx";
import getMovieGenre from "../../APIs/getMovieGenre";

function Releases(){
    const [movie, setMovie] = useState([]);

    async function getMovie() {
        const genres = await getMovieGenre(10751);
        setMovie(genres.data);
    }

    useEffect(() => {
        getMovie();
    }, [])

    return(
        <section className="releases-Section">
            <h1 className="title">Releases</h1>
            <Slider sliderData={movie}/>
        </section>
    );
};

export default Releases;