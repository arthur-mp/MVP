import { Router } from 'express';
const router = Router();
import {GenreController, GenreMovieController, NowPlayingController} from './api';

router.get('/genreList', GenreController.getGenre);

router.get('/movieGenre/:idGenre', GenreMovieController.getGenreList);

router.get('/nowPlaying', NowPlayingController.getNowPlaying);


export default router;