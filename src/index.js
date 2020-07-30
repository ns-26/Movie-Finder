import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer);

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
