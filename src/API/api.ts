import { Request, Response } from 'express';
import GenreService from '../Domain/GenreService';

class GenreController {
    static async getGenreList(request: Request, response: Response) {
        try {
            const genreData = new GenreService();
            const genreList = await genreData.getGenreList();

            // TODO retornar status e não só o objeto de resposta
            return response.send(genreList);

        } catch (err) {
            // TODO retornar erro e status de erro
            throw err;
        };
    };
};

export default GenreController;