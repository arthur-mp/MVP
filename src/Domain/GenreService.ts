import GetGenresList from "../Repository/Repository";

class GenreService {
    async getGenreList() {
        // objeto com data se der bom ou {} se der ruim
        const repositoryResponse = await GetGenresList();
        if (repositoryResponse.status) {
            return show(repositoryResponse);
        };

        return { message: 'Failed to make the request.' };
    };
};

// TODO tirar isso
// const obj = { // response
//     data: {
//         genres: [
//             {
//                 id: '',
//                 name: ''
//             }
//         ]
//     },
//     status: 200
// }

// const { data, status } = obj;

const test = 42;

const obj = { test };
const obj_2 = { test: test };

// view
function show({ data }: any) {
    const { genres } = data;

    // const genreList = genres.map(function (item: any) {
    //     return {
    //         id: item.id,
    //         name: item.name
    //     };
    // });

    type typeGenres = { id: number, name: string };

    const genreList = genres.map(
        ({ id, name }: typeGenres) => ({ id, name })
    );

    return genreList;
};



export default GenreService;