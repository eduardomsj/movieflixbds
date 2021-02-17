package com.eduardojr.movieflixbds.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.eduardojr.movieflixbds.entities.Review;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ReviewDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	
	@NotBlank(message = "Campo obrigatório")
	private String text;
	
	private Long movieId;
	//private Long userId;
	
	@JsonProperty("user")
	private UserDTO userDto;
	
	public ReviewDTO() {
	}

	public ReviewDTO(Long id, String text, Long movieId, UserDTO userDto) {
		this.id = id;
		this.text = text;
		this.movieId = movieId;
		this.userDto = userDto;
	}
	
	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		movieId = entity.getMovie().getId();
		userDto = new UserDTO(entity.getUser());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public UserDTO getUserDto() {
		return userDto;
	}

	public void setUserDto(UserDTO userDto) {
		this.userDto = userDto;
	}	
}