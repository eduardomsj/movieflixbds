package com.eduardojr.movieflixbds.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.eduardojr.movieflixbds.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

    @Query("SELECT obj FROM Movie obj "
            + "INNER JOIN obj.genre genre WHERE "
            + "(:genreId <= 0L) OR "
            + "(genre.id = :genreId)")
    Page<Movie> find(Long genreId, Pageable pageable);
}