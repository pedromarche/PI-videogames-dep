import axios from 'axios';
export const GET_ALL_GAMES = 'GET_ALL_GAMES';
export const GET_ALL_GENRES = 'GET_ALL_GENRES';
export const CREAT_GAME = 'CREAT_GAME';
export const GAME_DETAIL = 'GAME_DETAIL';
export const GET_NAME = 'GET_NAME';
export const FILTER_RATING = 'FILTER_RATING';
export const FILTER_NAME = 'FILTER_NAME';
export const FILTER_GENRE = 'FILTER_GENRE';
export const FILTER_ORIGIN = 'FILTER_ORIGIN';
export const CLEAR_PAGE = 'CLEAR_PAGE';
let URL = "https://pivideogamespedro.herokuapp.com"
export function getAllGames(){ // trae todos los juegos
    return async function (dispatch) {
        try {
          let result = await axios.get(URL + `/videogames`);
          console.log("getAllVideogames ");
          return dispatch({
            type: GET_ALL_GAMES,
            payload: result.data,
          });
        } catch (e) {
          console.log("Error from catch getAllVideogames " + e.message);
        }
      };
};
// export const getAllVideogames = () => {
//     return async function (dispatch) {
//       try {
//         let result = await axios.get(URL + `/videogames`);
//         console.log("getAllVideogames ");
//         return dispatch({
//           type: GET_ALL_VIDEOGAMES,
//           payload: result.data,
//         });
//       } catch (e) {
//         console.log("Error from catch getAllVideogames " + e);
//       }
//     };
//   };

// export const getName = (name) => dispatch => { // busca por name
//     try{
//         return fetch (`http://localhost:3001/videogames?name=${name}`)
//             .then(response => response.json())
//             .then(data => dispatch({type: GET_NAME, payload: data}));
//     }catch(e){
//         console.log(error)
//     }
// };

export function getAllGenres(){ //trae todos los generos
    return async function(dispatch){
        var json = await axios(`${process.env.REACT_APP_API}/genres`);
        return dispatch({type: GET_ALL_GENRES, payload: json.data});
    }
};

export function gameDetail(id){ //trae por id por params
    return async function(dispatch){
    var json = await axios(`${process.env.REACT_APP_API}/videogame/${id}`);
    return dispatch({type: GAME_DETAIL, payload: json.data})
    }
}; 

export function createGame(payload){ //crear juego
    return async function(dispatch){
        var json = await axios.post(`${process.env.REACT_APP_API}/videogame`, payload)
        return json;
    }
}

export function filterRatio(payload){
    return {
        type: FILTER_RATING,
        payload
    }
};

export function filterName(payload) {
    return {
        type: FILTER_NAME,
        payload
    }
};

export function filterGenre(payload) {
    return {
        type: FILTER_GENRE,
        payload
    }
};
export function filtOrigin(payload) {
    return{
        type: FILTER_ORIGIN,
        payload
    }
};
export function clearPage(){
    return{
        type: CLEAR_PAGE
    }
}


export const getName = (name) => dispatch => { // busca por name
  
        return fetch (`${process.env.REACT_APP_API}/videogames?name=${name}`)
            .then(response => response.json())
            .then(data => dispatch({type: GET_NAME, payload: data}))
            .catch(e => console.log(e))   
}
