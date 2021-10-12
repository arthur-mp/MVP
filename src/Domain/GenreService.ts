import GetGenresList from "../Repository/Repository";

class GenreService {
    async getGenreList() {
        const repositoryResponse = await GetGenresList();
        if (repositoryResponse.status) {
            return view(repositoryResponse);
        };

        return { message: 'Failed to make the request.' };
    };
};

function view({ data }: any) {
    const { genres } = data;
    
    type typeGenres = { id: number, name: string };

    const genreList = genres.map(
        ({ id, name }: typeGenres) => ({ id, name })
    );

    return genreList;
};



export default GenreService;