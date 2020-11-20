package com.eduardojr.movieflixbds.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eduardojr.movieflixbds.dto.GenreDTO;
import com.eduardojr.movieflixbds.entities.Genre;
import com.eduardojr.movieflixbds.repositories.GenreRepository;
import com.eduardojr.movieflixbds.services.exceptions.ResourceNotFoundException;

@Service
public class GenreService {

	@Autowired
	private GenreRepository repository;
	
	@Transactional(readOnly = true)
	public Page<GenreDTO> findAllPaged(PageRequest pageRequest) {
		Page<Genre> list = repository.findAll(pageRequest);
		
		return list.map(x -> new GenreDTO(x));
	}
	
	@Transactional(readOnly = true)
	public GenreDTO findById(Long id) {
		Optional<Genre> obj = repository.findById(id);
		Genre entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new GenreDTO(entity);
	}
}
