import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE } from '../actions';

const initialMoviesState = {
	list: [],
	favourites: []
};
export default function movies(state = initialMoviesState, action) {
	//state shows the current state of the store
	// if (action.type === ADD_MOVIES) {
	// 	return {
	// 		...state,
	// 		list: action.movies
	// 	};
	// }
	// return state; //a reducer has to return something always so be careful
	switch (action.type) {
		case ADD_MOVIES:
			return { ...state, list: action.movies };
		case ADD_FAVOURITE:
			return { ...state, favourites: [ action.movie, ...state.favourites ] };
		case REMOVE_FAVOURITE:
			return { ...state, favourites: [ action.movie, ...state.favourites ] };
		default:
			return state;
	}
}

// this reducer is a pure function which neither imports anything out of the argument nor changes the DOM it just returns a value
//NOTE: reducer always returns the new state does not modify the current state,and then the new state is merged ny the store itself
//for the state  = [] now the store is setup and it calls the reducer internally if the state is undefined then it is assigned the value given else the value which is defined
