// {
//     type: 'ADD_MOVIES', //necessary to tell the action what to do
//     movies:[m1,m2,m3]
// }
// {
//     type:''
// }

//action types
export const ADD_MOVIES = 'ADD_MOVIES';

//action creators
export function addMovies(movies) {
	return {
		type: ADD_MOVIES,
		movies
	};
}

//action type for creating favourite
export const ADD_FAVOURITE = 'ADD_FAVOURITE';

export function addFavourite(movie) {
	return {
		type: ADD_FAVOURITE,
		movie
	};
}

export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';

export function removeFavourite(movie) {
	return {
		type: REMOVE_FAVOURITE,
		movie
	};
}
