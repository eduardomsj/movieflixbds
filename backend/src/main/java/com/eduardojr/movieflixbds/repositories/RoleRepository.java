package com.eduardojr.movieflixbds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eduardojr.movieflixbds.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	
}
