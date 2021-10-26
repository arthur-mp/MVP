import api from '../config/axios';
import api_key from '../config/env';


async function GetGenres() {
    try {
        const response = await api.get(`/3/genre/movie/list?api_key=${api_key}&languege=en-US`);
        if (response.status >= 200 && response.status < 300) {
            const genre = response.data;
            return {
                status: true,
                data: genre,
            };
        };

        return {
            status: false,
            data: "Failed the request"
        };
    } catch (err) {
        throw (err);
    };
};

async function GetMoviesGenre(idGenre: string){
    try {
        const response = await api.get(`/3/discover/movie?api_key=${api_key}&language=en-US&page=1&with_genres=${idGenre}`);
        if(response.status >= 200 && response.status < 300){
            const genreList = response.data;
            return{
                status: true,
                data: genreList,
            };
        };

        return {
            status: false,
            data: "Failed the request"
        };
    } catch (err) {
        throw (err);
    };
};

async function GetNowPlaying(){
    try {
        const response = await api.get(`/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`);
        if(response.status >= 200 && response.status < 300){
            const movie = response.data;
            return{
                status: true,
                data: movie,
            }
        }
        return{
            status: false,
            data: "Failed the request"
        }

    } catch (err) {
        throw(err);
    };
};

export {GetGenres, GetMoviesGenre, GetNowPlaying};