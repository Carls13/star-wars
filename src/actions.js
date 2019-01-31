import {	REQUEST_FILMS_PENDING,
			REQUEST_FILMS_SUCCESS,
			REQUEST_FILMS_FAILED } from './constants.js';

export const requestFilms = () =>(dispatch)=> {
	dispatch({ type: REQUEST_FILMS_PENDING });
	fetch('https://swapi.co/api/films/').then(response =>{
		return response.json();})
	.then(data => dispatch({ type: REQUEST_FILMS_SUCCESS,
							payload: data }))
	.catch(error => dispatch({ type: REQUEST_FILMS_FAILED, 
							payload: error }))
}