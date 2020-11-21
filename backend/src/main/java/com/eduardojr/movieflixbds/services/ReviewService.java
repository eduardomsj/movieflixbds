package com.eduardojr.movieflixbds.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eduardojr.movieflixbds.dto.ReviewDTO;
import com.eduardojr.movieflixbds.entities.Review;
import com.eduardojr.movieflixbds.repositories.MovieRepository;
import com.eduardojr.movieflixbds.repositories.ReviewRepository;
import com.eduardojr.movieflixbds.repositories.UserRepository;
import com.eduardojr.movieflixbds.services.exceptions.DatabaseException;
import com.eduardojr.movieflixbds.services.exceptions.ResourceNotFoundException;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Transactional(readOnly = true)
	public Page<ReviewDTO> findAllPaged(PageRequest pageRequest) {
		Page<Review> list = repository.findAll(pageRequest);
		return list.map(x -> new ReviewDTO(x));
	}
	
	@Transactional(readOnly = true)
	public ReviewDTO findById(Long id) {
		Optional<Review> obj = repository.findById(id);
		Review entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new ReviewDTO(entity);
	}
	
	@Transactional
    public ReviewDTO insert(ReviewDTO dto) {
        Review entity = new Review();
        try {
            entity.setMovie(movieRepository.getOne(dto.getMovieId()));
            entity.setUser(userRepository.getOne(dto.getUserId()));
            entity.setText(dto.getText());

            repository.save(entity);

            return new ReviewDTO(entity);
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Movie Id: " + dto.getMovieId() + " or User Id: " + dto.getUserId() + " invalid!");
        }
    }	
}