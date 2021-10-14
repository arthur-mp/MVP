import { Request, Response } from 'express';
import GenreService from '../Domain/GenreService';
import GenreMovieService from '../Domain/GenreMovieService';
import NowPlayingService from '../Domain/NowPlayingService';

class GenreController {
    static async getGenre(request: Request, response: Response) {
        try {
            const genreData = new GenreService();
            const genreList = await genreData.getGenre();

            return response.send(genreList);

        } catch (err) {
            throw err;
        };
    };
};

class GenreMovieController{
    static async getGenreList(req: Request, res: Response){
        try{
            const listGenreData = new GenreMovieService();
            const listGenreList = await listGenreData.getGenreList();

            return res.send(listGenreList);
        }catch(err){
            throw err;
        };
    };
};

class NowPlayingController{
    static async getNowPlaying(req: Request, res: Response){
        try{
            const data = new NowPlayingService();
            const list = await data.getNow();

            return res.send(list);
        }catch(err){
            throw err;
        };
    };
};

export {GenreController, GenreMovieController, NowPlayingController};