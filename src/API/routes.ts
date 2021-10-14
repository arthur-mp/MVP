import { Router } from 'express';
const router = Router();
import {GenreController, GenreMovieController, NowPlayingController} from './api';

router.get('/genre', GenreController.getGenre);

router.get('/genreList', GenreMovieController.getGenreList);

router.get('/nowPlaying', NowPlayingController.getNowPlaying);

export default router;