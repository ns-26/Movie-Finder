import React from 'react';
import { data } from '../data';
import { addMoviesToList, handleMovieSearch } from '../actions';
import { StoreContext } from '../index';
import { connect } from '../index';

class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			searchText: ''
		};
	}

	handleAddToMovies = (movie) => {
		this.props.dispatch(addMoviesToList(movie));
	};

	handleSearch = () => {
		const { searchText } = this.state;
		this.props.dispatch(handleMovieSearch(searchText));
	};

	handleChange = (e) => {
		this.setState({
			searchText: e.target.value
		});
	};
	render() {
		const { result: movie, showSearchResults } = this.props.search;
		return (
			<div className="nav">
				<div className="search-container">
					<input type="text" onChange={this.handleChange} />
					<button id="search-btn" onClick={this.handleSearch}>
						Search
					</button>
					{showSearchResults && (
						<div className="search-results">
							<div className="search-result">
								<img src={movie.Poster} alt="search-pic" />
								<div className="movie-info">
									<span>{movie.Title}</span>
									<button onClick={() => this.handleAddToMovies(movie)}>Add To Movies</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

// class NavbarWrapper extends React.Component {
// 	render() {
// 		return (
// 			<StoreContext.Consumer>
// 				{(store) => <Navbar dispatch={store.dispatch} search={store.getState().search} />}
// 			</StoreContext.Consumer>
// 		);
// 	}
// }

function mapStateToProps(state) {
	return {
		search: state.search
	};
}

const connectedNavbarComponent = connect(mapStateToProps)(Navbar);

export default connectedNavbarComponent;
