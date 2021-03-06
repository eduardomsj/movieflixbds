import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, ImageSourcePropType } from 'react-native';
import { getMovies } from '../services';
import { MovieCard } from '../components';
import { theme } from '../styles';

const Catalog: React.FC = () => {    
    const [movies, setMovies] = useState([]); 
    const [loading, setLoading] = useState(false);

    async function fillMovies() {
        setLoading(true);
        const res = await getMovies();
        setMovies(res.data.content);
        setLoading(false);
    }

    useEffect(() => {
        fillMovies();
    }, []);  
    
    return (
        <ScrollView contentContainerStyle={theme.scrollContainer}>      
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (                
                movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
            )}
        </ScrollView>
    )
}

export default Catalog;