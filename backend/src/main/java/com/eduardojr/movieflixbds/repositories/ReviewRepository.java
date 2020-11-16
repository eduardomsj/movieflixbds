package com.eduardojr.movieflixbds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eduardojr.movieflixbds.entities.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
	
}
