package com.eduardojr.movieflixbds.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eduardojr.movieflixbds.dto.MovieDTO;
import com.eduardojr.movieflixbds.entities.Genre;
import com.eduardojr.movieflixbds.entities.Movie;
import com.eduardojr.movieflixbds.repositories.GenreRepository;
import com.eduardojr.movieflixbds.repositories.MovieRepository;
import com.eduardojr.movieflixbds.services.exceptions.DatabaseException;
import com.eduardojr.movieflixbds.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;
	
	@Autowired
	private GenreRepository genreRepository;
	
	@Transactional(readOnly = true)
    public Page<MovieDTO> findAllPaged(Long genreId, PageRequest pageRequest) {
        Page<Movie> list = repository.find(genreId, pageRequest);
        return list.map(x -> new MovieDTO(x));
    }

    @Transactional(readOnly = true)
    public MovieDTO findById(Long id) {
        Optional<Movie> obj = repository.findById(id);
        Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
        return new MovieDTO(entity, entity.getReviews());
    }

    @Transactional
    public MovieDTO insert(MovieDTO dto) {
        try {
            Movie entity = new Movie();
            dtoToEntity(entity, dto);
            repository.save(entity);
            return new MovieDTO(entity);
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Genre id: " + dto.getGenreId() + " doesn't exist" );
        }
    }

    @Transactional
    public MovieDTO update(Long id, MovieDTO dto) {
        try {
            Movie entity = repository.getOne(id);
            dtoToEntity(entity, dto);
            repository.save(entity);

            return new MovieDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Movie id: " + id + " not found");
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Integrity violation");
        }
    }

    public void delete(Long id) {
        try {
            repository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("Movie id: " + id + " not found");
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Integrity violation");
        }
    }

    private void dtoToEntity(Movie entity, MovieDTO dto) {
        entity.setTitle(dto.getTitle());
        entity.setSubTitle(dto.getSubTitle());
        entity.setYear(dto.getYear());
        entity.setImgUrl(dto.getImgUrl());
        entity.setSynopsis(dto.getSynopsis());

        Genre genre = genreRepository.getOne(dto.getGenreId());
        entity.setGenre(genre);
    }
}