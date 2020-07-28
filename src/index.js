import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import movies from './reducers';

const store = createStore(movies);
console.log(store);
console.log('Before State', store.getState());

//using dispatch we send actions to the store
store.dispatch({
	type: 'ADD_MOVIES',
	movies: [
		{
			name: 'Superman'
		}
	]
});
console.log('After State', store.getState());

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
