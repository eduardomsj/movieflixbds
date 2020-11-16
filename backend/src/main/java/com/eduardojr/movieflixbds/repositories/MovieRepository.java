package com.eduardojr.movieflixbds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eduardojr.movieflixbds.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
	
}