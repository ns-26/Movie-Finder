import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data';
import { addMovies, setShowFavourites } from '../actions';
import { connect } from '../index';

class App extends React.Component {
	componentDidMount() {
		//after successful api call dispatch an action that we need to add the movies
		this.props.dispatch(addMovies(data));
		console.log('State', this.props);
		return;
	}
	isMovieFavourite(movie) {
		const { movies } = this.props;
		const index = movies.favourites.indexOf(movie);
		if (index !== -1) {
			//movie not found
			return false;
		}
		return true;
	}
	onChangeTab = (val) => {
		console.log(this.props.dispatch(setShowFavourites(val)));
		return;
	};
	render() {
		const { movies } = this.props;
		const { list, favourites, showFavourites } = movies;
		console.log('render');
		console.log(this.props);
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
									dispatch={this.props.dispatch}
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

//creating an App Wrapper to use the consumer everywhere
// class AppWrapper extends React.Component {
// 	render() {
// 		return <StoreContext.Consumer>{(store) => <App store={store} />}</StoreContext.Consumer>;
// 	}
// }

function mapStateToProps(state) {
	return {
		movies: state.movies,
		search: state.search
	};
}

const connectedAppComponent = connect(mapStateToProps)(App); //method chaining callback gives the data we need and app is the component we want the data in

export default connectedAppComponent;
