import {GetMoviesGenre} from "../Repository/Repository";

class GenreMovieService{
    async getGenreList(idGenre: string){
        const repositoryResponse = await GetMoviesGenre(idGenre);
        if(repositoryResponse.status){
            return view(repositoryResponse);
        };

        return {message: 'Failed to make the request.'};
    };
};

function view({ data }: any) {
    const { results } = data;
    
    type typeGenres = { id: number, title: string, genre_ids: number[] };

    const genreList = results.map(
        ({ id, title, genre_ids }: typeGenres) => ({ id, title, genre_ids })
    );

    return genreList;
};

export default GenreMovieService;