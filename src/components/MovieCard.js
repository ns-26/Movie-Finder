import React from 'react';
import { addFavourite, removeFavourite } from '../actions';

class MovieCard extends React.Component {
	handleFavouriteClick = () => {
		const { movie } = this.props;
		this.props.dispatch(addFavourite(movie));
		return;
	};
	handleUnFavouriteClick = () => {
		const { movie } = this.props;
		this.props.dispatch(removeFavourite(movie));
		return;
	};

	render() {
		const { movie, isFavourite } = this.props;

		return (
			<div className="movie-card">
				<div className="left">
					<img src={movie.Poster} alt="Movie-Poster" />
				</div>
				<div className="right">
					<div className="title">{movie.Title}</div>
					<div className="plot">{movie.Plot}</div>
					<div className="footer">
						<div className="rating">{movie.imdbRating}</div>
						{isFavourite ? (
							<button className="favourite-btn" onClick={this.handleFavouriteClick}>
								Add To Favourites
							</button>
						) : (
							<button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>
								UnFavourite
							</button>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default MovieCard;
