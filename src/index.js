import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

//function logger = functopn (obj,next,action){}//curried form of this
//curried function handled by redux

//first syntax
/*const logger = function({ dispatch, getState }) {
	//redux sends an object with the dispatch and the getState property
	return function(next) {
		return function(action) {
			//middleware Code
			console.log('ACTION TYPE =', action.type);
			next(action);
		};
	};
};*/

const logger = ({ dispatch, getState }) => (next) => (action) => {
	//logger code
	if (typeof action !== 'function') {
		console.log(('ACTION TYPE = ', action.type));
	}
	next(action);
};

// const thunk = ({ dispatch, getState }) => (next) => (action) => {
// 	if (typeof action == 'function') {
// 		action(dispatch);
// 		return;
// 	}
// 	next(action);
// };

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

// console.log('Before State', store.getState());

// //using dispatch we send actions to the store
// store.dispatch({
// 	type: 'ADD_MOVIES',
// 	movies: [
// 		{
// 			name: 'Superman'
// 		}
// 	]
// });
// console.log('After State', store.getState());

ReactDOM.render(
	<React.StrictMode>
		<App store={store} />
	</React.StrictMode>,
	document.getElementById('root')
);
