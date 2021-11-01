import { GetMoviesGenre, getMovieDetails, getKey } from "../Repository/Repository";

class GenreMovieService{
    async getGenreList(idGenre: string){
        const repositoryResponse = await GetMoviesGenre(idGenre);
        if(repositoryResponse.status){
            return view(repositoryResponse);
        };

        return {message: 'Failed to make the request.'};
    };
};

async function view({ data }: any) {
    const { results } = data;

        const genreList = await Promise.all(results.map(
         async function(item : any) {
            let valor: any = await getDetails(parseInt(item.id));
            let {genres} = valor;

            let {runtime} = valor;

            let namesGenres = genres.map(function (item: any){
                return item.name;
            });

            let key: any = await getVideo(parseInt(item.id));
            let {results} = key;

            let keyYoutube = results.map(function (item:any) {
                return item.key;
            }); 

            return{
                id: item.id,
                title: item.title,
                overview: item.overview,
                popularity: item.popularity,
                vote_count: item.vote_count,
                keyVideo: keyYoutube,
                poster_path: item.poster_path,
                backdrop_path: item.backdrop_path,
                original_title: item.original_title,
                genre_names: namesGenres.toString(),
                genre_ids: item.genre_ids,
                release_date: item.release_date,
                adult: item.adult,
                vote_average: item.vote_average,
                runtime: runtime
            };
         }
         )
        )

    return genreList;
};


async function getDetails(id: number){
    const repositoryResponse = await getMovieDetails(id);
    return repositoryResponse.data;
}

async function getVideo(id: number){
    const repositoryResponse = await getKey(id);
    return repositoryResponse.data;
}

export default GenreMovieService;