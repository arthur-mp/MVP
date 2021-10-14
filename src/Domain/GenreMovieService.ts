import {GetMoviesGenre} from "../Repository/Repository";

class GenreMovieService{
    async getGenreList(){
        const repositoryResponse = await GetMoviesGenre();
        if(repositoryResponse.status){
            return view(repositoryResponse);
        };

        return {message: 'Failed to make the request.'};
    };
};

function view({ data }: any) {
    const { results } = data;
    
    type typeGenres = { id: number, title: string };

    const genreList = results.map(
        ({ id, title }: typeGenres) => ({ id, title })
    );

    return genreList;
};

export default GenreMovieService;