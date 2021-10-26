import {GetNowPlaying} from "../Repository/Repository";


class NowPlayingService{
    async getNow(){
        const repositoryResponse = await GetNowPlaying();
        if(repositoryResponse.status){
            return view(repositoryResponse);
        };

        return {message: 'Failed to make the request.'};
    };
};

function view({ data }: any) {
    const { results } = data;
    
    type typeGenres = { id: number, title: string, release_date: string };

    const genreList = results.map(
        ({ id, title, release_date }: typeGenres) => ({ id, title, release_date })
    );

    return genreList;
};

export default NowPlayingService;