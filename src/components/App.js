import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data';

class App extends React.Component {
	componentDidMount() {
		const { store } = this.props;
		store.subscribe(() => {
			console.log('Updated');
			this.forceUpdate(); //forecefully update the component but should not be done
		});
		//make api calls

		//after successful api call dispatch an action that we need to add the movies
		store.dispatch({
			type: 'ADD_MOVIES',
			movies: data
		});
		console.log('State', store.getState());
	}
	render() {
		const movies = this.props.store.getState();
		console.log('render');
		return (
			<div className="App">
				<Navbar />
				<div className="main">
					<div className="tabs">
						<div className="tab">Movies</div>
						<div className="tab">Favourites</div>
					</div>
					<div className="list">
						{movies.map((movie, index) => {
							return <MovieCard movie={movie} key={`movies-${index}`} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
