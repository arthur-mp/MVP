import React, {useState, useEffect} from "react";

import getMovieGenre from '../../APIs/getMovieGenre';

function Teste(){
    const [movies, setMovies] = useState([]);

    async function GetMovies(){
        const genreList = await getMovieGenre(28);
        setMovies(genreList.data);
    }

    useEffect(() => {
        GetMovies();
    }, []);

    console.log(movies)
    
    return(
        <div>
            <h1>{}</h1>
            
        </div>
    )
}

export default Teste;