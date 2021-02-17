package com.eduardojr.movieflixbds.utils;

import org.springframework.security.core.context.SecurityContextHolder;

public class SecurityUtils {

	public static String getLoggedUserName() {
		if (SecurityContextHolder.getContext().getAuthentication() != null) {
			return SecurityContextHolder.getContext().getAuthentication().getName();
		} else {
			return null;
		}
	}
}
