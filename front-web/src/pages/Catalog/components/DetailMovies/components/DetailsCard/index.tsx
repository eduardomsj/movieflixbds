import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../../../../../../core/types/movies';
import { makePrivateRequest } from '../../../../../../core/utils/request';
import './styles.scss';

type ParamsType = {
    movieId: string;
}

const DetailsCard = () => {

    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
        
    useEffect(() => {
        makePrivateRequest({url:`/movies/${movieId}`})
        .then(response => setMovie(response.data));
    }, [movieId]);
    
    return (

        <div className="movie-details-container">
            <img src={movie?.imgUrl} alt="movieImg" className="movie-details-img" />
            <div className="movie-details-content">
                <div className={"movie-details-title"}>{movie?.title}</div>
                <span className={"movie-details-year"}>{movie?.year}</span>
                <h3 className={"movie-details-subtitle"}>{movie?.subTitle}</h3>
                <div className={"movie-details-description"}>
                    <p className={"movie-details-text"}>
                        {movie?.synopsis}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DetailsCard;