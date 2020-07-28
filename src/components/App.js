import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data';
import { addMovies } from '../actions';

class App extends React.Component {
	componentDidMount() {
		const { store } = this.props;
		store.subscribe(() => {
			console.log('Updated');
			this.forceUpdate(); //forecefully update the component but should not be done
		});
		//make api calls

		//after successful api call dispatch an action that we need to add the movies
		store.dispatch(addMovies(data));
		console.log('State', store.getState());
	}
	isMovieFavourite(movie) {
		const { favourites } = this.props.store.getState();
		const index = favourites.indexOf(movie);
		if (index !== -1) {
			//movie not found
			return false;
		}
		return true;
	}
	render() {
		const movies = this.props.store.getState().list;
		console.log('render');
		console.log(this.props.store.getState());
		return (
			<div className="App">
				<Navbar />
				<div className="main">
					<div className="tabs">
						<div className="tab" onClick="handleShowMovies">
							Movies
						</div>
						<div className="tab">Favourites</div>
					</div>
					<div className="list">
						{movies.map((movie, index) => {
							return (
								<MovieCard
									movie={movie}
									key={`movies-${index}`}
									dispatch={this.props.store.dispatch}
									isFavourite={this.isMovieFavourite(movie)}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
