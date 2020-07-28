import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from '../actions';

const initialMoviesState = {
	list: [],
	favourites: [],
	showFavourites: false
};
export default function movies(state = initialMoviesState, action) {
	switch (action.type) {
		case ADD_MOVIES:
			return { ...state, list: action.movies };
		case ADD_TO_FAVOURITES:
			return { ...state, favourites: [ action.movie, ...state.favourites ] };
		case REMOVE_FROM_FAVOURITES:
			const filteredArray = state.favourites.filter((movie) => movie.Title !== action.movie.Title);
			return { ...state, favourites: filteredArray };
		case SET_SHOW_FAVOURITES:
			return { ...state, showFavourites: action.val };
		default:
			return state;

		//state shows the current state of the store
		// if (action.type === ADD_MOVIES) {
		// 	return {
		// 		...state,
		// 		list: action.movies
		// 	};
		// }
		// return state; //a reducer has to return something always so be careful
	}
}

// this reducer is a pure function which neither imports anything out of the argument nor changes the DOM it just returns a value
//NOTE: reducer always returns the new state does not modify the current state,and then the new state is merged ny the store itself
//for the state  = [] now the store is setup and it calls the reducer internally if the state is undefined then it is assigned the value given else the value which is defined
