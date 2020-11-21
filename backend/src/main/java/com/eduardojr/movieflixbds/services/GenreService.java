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

import com.eduardojr.movieflixbds.dto.GenreDTO;
import com.eduardojr.movieflixbds.entities.Genre;
import com.eduardojr.movieflixbds.repositories.GenreRepository;
import com.eduardojr.movieflixbds.services.exceptions.DatabaseException;
import com.eduardojr.movieflixbds.services.exceptions.ResourceNotFoundException;

@Service
public class GenreService {

	@Autowired
	private GenreRepository repository;
	
    @Transactional(readOnly = true)
    public Page<GenreDTO> findAllPaged(PageRequest pageRequest) {
        Page<Genre> list = repository.findAll(pageRequest);
        return list.map(GenreDTO::new);
    }

    @Transactional(readOnly = true)
    public GenreDTO findById(Long id) {
        Optional<Genre> obj = repository.findById(id);
        Genre entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
        return new GenreDTO(entity);
    }

    @Transactional
    public GenreDTO insert(GenreDTO dto) {
        Genre entity = new Genre();
        entity.setName(dto.getName());
        repository.save(entity);
        return new GenreDTO(entity);
    }

    @Transactional
    public GenreDTO update(Long id, GenreDTO dto) {
        try {
            Genre entity = repository.getOne(id);
            entity.setName(dto.getName());
            repository.save(entity);
            return new GenreDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Genre id: " + id + " not found");
        }
    }

    public void delete(Long id) {
        try {
            repository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("Genre id: " + id + " not found");
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Integrity violation");
        }
    }
}