import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data';
import { addMovies, setShowFavourites } from '../actions';

class App extends React.Component {
	componentDidMount() {
		const { store } = this.props;
		store.subscribe(() => {
			console.log('Updated');
			this.forceUpdate(); //forecefully update the component but should not be done
			return;
		});
		//make api calls

		//after successful api call dispatch an action that we need to add the movies
		store.dispatch(addMovies(data));
		console.log('State', store.getState());
		return;
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
	onChangeTab = (val) => {
		console.log(this.props.store.dispatch(setShowFavourites(val)));
		return;
	};
	render() {
		const { list, favourites, showFavourites } = this.props.store.getState();
		console.log('render');
		console.log(this.props.store.getState());
		const displayMovies = showFavourites ? favourites : list;
		return (
			<div className="App">
				<Navbar />
				<div className="main">
					<div className="tabs">
						<div
							className={`tab ${showFavourites ? '' : 'active-tabs'}`}
							onClick={() => {
								this.onChangeTab(false);
							}}
						>
							Movies
						</div>
						<div
							className={`tab ${showFavourites ? 'active-tabs' : ''}`}
							onClick={() => {
								this.onChangeTab(true);
							}}
						>
							Favourites
						</div>
					</div>
					<div className="list">
						{displayMovies.map((movie, index) => {
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
					{displayMovies.length === 0 ? <div className="no-movies">No Movies To Display</div> : null}
				</div>
			</div>
		);
	}
}

export default App;
