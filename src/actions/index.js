// {
//     type: 'ADD_MOVIES', //necessary to tell the action what to do
//     movies:[m1,m2,m3]
// }
// {
//     type:''
// }

//action types
export const ADD_MOVIES = 'ADD_MOVIES';
//action type for creating favourite
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_MOVIES_TO_LIST = 'ADD_MOVIES_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

//action creators
export function addMovies(movies) {
	return {
		type: ADD_MOVIES,
		movies
	};
}

export function addFavourite(movie) {
	return {
		type: ADD_TO_FAVOURITES,
		movie
	};
}

export function removeFavourite(movie) {
	return {
		type: REMOVE_FROM_FAVOURITES,
		movie
	};
}

export function setShowFavourites(val) {
	return {
		type: SET_SHOW_FAVOURITES,
		val
	};
}

export function addMoviesToList(movie) {
	return {
		type: ADD_MOVIES_TO_LIST,
		movie
	};
}

//all api calls are like some actions and msut be added to the actions and not with the UI
export function handleMovieSearch(value) {
	const url = `https://omdbapi.com/?apikey=3ca5df7&t=${value}`;
	return function(dispatch) {
		fetch(url)
			.then((response) => response.json())
			.then((movie) => {
				console.log(movie);
				//for adding the movie we need to dispatch an action

				//dispatch({type:'ADD_SEARCH_RESULT' , movie})
				//but action creators send an object to handle a function we need middleware
				dispatch(addMovieSearchResult(movie));
			})
			.catch((err) => console.log(err));
	};
}

export function addMovieSearchResult(movie) {
	return {
		type: ADD_SEARCH_RESULT,
		movie
	};
}
