import {	REQUEST_FILMS_PENDING,
			REQUEST_FILMS_SUCCESS,
			REQUEST_FILMS_FAILED } from './constants.js';

const initialStateFilms = {
	isFilmsPending: false,
	films: [],
	filmsError:''
	}

export const requestFilms = (state=initialStateFilms, action={}) => {
	switch(action.type){
		case REQUEST_FILMS_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_FILMS_SUCCESS:
			return Object.assign({}, state, { films: action.payload,
												isPending: false });
		case REQUEST_FILMS_FAILED:
			return Object.assign( {}, state, { error: action.payload, 
												isPending: false });
		default:
			return state;
	}
}