import { Router } from 'express';
const router = Router();
import GenreController from './api';

router.get('/genreList', GenreController.getGenreList);

export default router;