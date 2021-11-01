import api from './baseAPI';

async function getGenre() {

    try {
        const response = await api.get('/genreList');

            if(response.status === 200){
                const data = response.data;
                return ({
                    movies: data,
                    status: true,
                });
            };

            return ({
                movies: response.data,
                status: false
            });

    } catch(err){
        throw err;
    }
}

export default getGenre;