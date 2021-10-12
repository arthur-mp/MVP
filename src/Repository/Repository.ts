import api from '../config/axios';
import api_key from '../config/env';


async function GetGenresList() {
    try {
        // TODO desestruturar esse objeto
        const response = await api.get(`/3/genre/movie/list?api_key=${api_key}&languege=en-US`);
        if (response.status >= 200 && response.status < 300) {
            const genreList = response.data;
            return {
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

export default GetGenresList;