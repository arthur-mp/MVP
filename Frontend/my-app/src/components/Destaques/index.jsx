import React, {useState, useEffect} from "react";
import './style.css';
import MovieList from '../models/MovieList/index';

import getGenres from '../../APIs/getGenre';
import getMovieGenre from '../../APIs/getMovieGenre';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import {newTheme} from '../../App';
import { ThemeProvider } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

  
function Destaques() { 

  const [generos, setGeneros] = useState([]);
  const [genero, setGenero] = useState(28);

  let[movies, setMovies] = useState([]);

  let[selectMovies, setSelect] = useState([]);

  let[count, setCount] = useState(5);

  async function getGeneros() {
    const genresList = await getGenres();
    const genres = genresList.status ? genresList.movies : ([]);
    setGeneros(genres);
};

  
  async function getMovies(){
      const movieList = await getMovieGenre(genero);

      let moviesResp = movieList.status ? movieList.data : ([]);
      setSelect(moviesResp.slice(0,moviesResp.length));

      moviesResp.splice(5, moviesResp.length);

      setMovies(moviesResp);
  };

  useEffect(() => {
    getGeneros();
  }, []);

  useEffect(() => {
    getMovies();
  }, [genero]);

  const handleChange = (event) => {
    setGenero(event.target.value)
  };

  function counter(){
    const film = selectMovies.slice(count,count+5);

    setMovies(film);
    if(count+5 >= selectMovies.length){
      setCount(0);
    }else{
      setCount(count+5);
    }
  }
  

    return(
      <ThemeProvider theme={newTheme}>
        <section className='Destaques'>
            <h1 className="title">Highlights</h1>

              <FormControl sx={{ marginInlineStart: 100, width: 200}} >
                <InputLabel id="demo-multiple-name-label"color="primary" >Genres</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name" 
                  color="primary"
                  value={genero}
                  onChange={handleChange}
                  input={<OutlinedInput label="Category" />}
                  MenuProps={MenuProps}
                >
                  {generos.map((name) => (
                    <MenuItem
                      value={name.id}
                    >
                      {name.name}
                    </MenuItem>
                  ))}
                </Select>
            </FormControl>

            <div className="cards">
                <MovieList movies={movies}/>
            </div> 

            <div className="button-load-more">
                <Button  variant="contained" 
                    color="secondary" 
                    startIcon={<AddIcon />}
                    sx={{ marginInlineStart: 102, width: 200 }}
                    onClick={counter}
                >More movies</Button>
            </div>
       </section>
     </ThemeProvider>
    );
}

export default Destaques;