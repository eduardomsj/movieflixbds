import React from 'react';
import { Movie } from '../../../../core/types/movies';
import './styles.scss';

type Props = {
    movie: Movie;
}

const CardMovies = ({movie}: Props) => {
    return (
        <div className="card-content">
            <img 
                src={movie.imgUrl} 
                alt="movie"
                className="movie-img"
            />
            <div className="movie-title">{movie.title}</div>
            <span className="movie-year">{movie.year}</span>
            <h3 className="movie-subtitle">{movie.subTitle}</h3>
        </div>
    );
}

export default CardMovies;