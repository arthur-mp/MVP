import api from './baseAPI';

async function getMovieGenre(props) {
    try {
        const response = await api.get(`/movieGenre/${props}`);
            if(response.status === 200){
                const movies = response.data;
                return ({
                    data: movies,
                    status: true,
                });
            };

            return ({
                data: response.data,
                status: false
            });

    } catch(err){
        throw err;
    }
}

export default getMovieGenre;