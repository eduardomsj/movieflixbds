import React, { useEffect } from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { Genre } from '../../../../core/types/movies';
import { makePrivateRequest } from '../../../../core/utils/request';
import './styles.scss';

export type FilterForm = {
    genreId?: number;
}

type Props = {
    onSearch: (filter: FilterForm) => void;
}

const FilterMovies = ({ onSearch }: Props) => {

    const [genres, setGenres] = useState<Genre[]>([]);
    const [genre, setGenre] = useState<Genre>();

    useEffect(() => {      
        makePrivateRequest({ url: '/genres' })
            .then(response => setGenres(response.data))
    }, [])

    const handleChangeGenre = (genre: Genre) => {
        setGenre(genre);
        onSearch({ genreId: genre?.id })        
    }

    return (
        <div className="catalog-container">
            <div className="catalog-content-search">
                <Select 
                    name="genres"
                    key={`select-${genre?.id}`}
                    value={genre}
                    options={genres}
                    getOptionLabel={(option: Genre) => option.name}
                    getOptionValue={(option: Genre) => String(option.id)}
                    placeholder="Gêneros"
                    inputId="genres"
                    onChange={value => handleChangeGenre(value as Genre)}
                    classNamePrefix="catalog-select"
                />
            </div>
        </div>
    );
}

export default FilterMovies;