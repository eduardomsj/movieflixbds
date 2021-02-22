import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { makePrivateRequest } from '../../../../core/utils/request';
import { isAllowedByRole } from '../../../../core/utils/auth';
import ButtonLogout from '../../../../core/components/ButtonLogout';
import Navbar from '../../../../core/components/Navbar';
import { Movie } from '../../../../core/types/movies';
import DetailsCard from './components/DetailsCard';
import CommentCard from './components/CommentCard';
import ReviewCard from './components/ReviewCard';
import DetailMovieLoader from '../LoaderMovies/DetailMovieLoader';
import ReviewMovieLoader from '../LoaderMovies/ReviewMovieLoader';
import './styles.scss';

type ParamsType = {
    movieId: string;
}

const DetailMovies = () => {
    const { movieId } = useParams<ParamsType>();
    const [movieResponse, setMovieResponse] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => {
                setMovieResponse(response.data);
            })
            .finally(() => setIsLoading(false));
    }, [movieId])

    return (
        <>
            <Navbar>
                <ButtonLogout />
            </Navbar>
            <Link to="/movies" className="back-container">
                    <h3 className="back-text">Voltar</h3>
            </Link>   
            {isLoading ? <DetailMovieLoader /> : (         
                <DetailsCard />
            )}
            {isLoading ? <ReviewMovieLoader /> : (
            isAllowedByRole(['ROLE_MEMBER']) &&
                <CommentCard id={movieId}/>
            )}
            <div className="review-container">
                {movieResponse?.reviews.map(review => (
                    <ReviewCard 
                        key={review.id} 
                        textReview={review.text} 
                        userReview={review.userName} 
                    />
                ))}
            </div>
        </>
    );
};

export default DetailMovies;