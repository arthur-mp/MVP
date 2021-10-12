import { Request, Response } from 'express';
import GenreService from '../Domain/GenreService';

class GenreController {
    static async getGenreList(request: Request, response: Response) {
        try {
            const genreData = new GenreService();
            const genreList = await genreData.getGenreList();

            return response.send(genreList);

        } catch (err) {
            throw err;
        };
    };
};

export default GenreController;