import React from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MoviesResponse} from '../../core/types/movies';
import { makePrivateRequest } from '../../core/utils/request';
import CardMovies from './components/CardMovies';
import ButtonLogout from '../../core/components/ButtonLogout';
import Navbar from '../../core/components/Navbar';
import './styles.scss';

const Catalog = () => {

    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [isLoading, setIsLoading] = useState(false);
    
    const getMovies = useCallback(() => {
        
        const params = {
            size: 4,
        }

        setIsLoading(true);
        
        makePrivateRequest({ url: '/movies', params })
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

    useEffect(() => {
        getMovies();
    }, [getMovies]);

    return (
        <>
            <Navbar>
                <ButtonLogout />
            </Navbar>
            <div className="catalog-container">
                <div className="catalog-container-card">                    
                    {moviesResponse?.content.map(movie => (
                        <Link to={`/movies/${movie.id}`}>
                            <CardMovies movie={movie} key={movie.id} />
                        </Link>
                        ))
                    })
                </div>
            </div>
        </>
    )
}

export default Catalog;