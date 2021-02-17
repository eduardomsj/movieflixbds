INSERT INTO tb_user (name, email, password) VALUES ('Alex Brown', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Maria Green', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_genre (name) VALUES ('Comedy');
INSERT INTO tb_genre (name) VALUES ('Drama');
INSERT INTO tb_genre (name) VALUES ('Action');
INSERT INTO tb_genre (name) VALUES ('Adventure');

INSERT INTO tb_movie (title, sub_title, year, genre_id, img_url, synopsis) VALUES ('The Matrix','Welcome to the Real World', 1999, 3, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg', 'Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.');
INSERT INTO tb_movie (title, sub_title, year, genre_id, img_url, synopsis) VALUES ('The Matrix Reloaded','Free your mind', 2003, 3, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/sDxCd4nt3eR4qOCW1GoD0RabQtq.jpg', 'Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance.');
INSERT INTO tb_movie (title, sub_title, year, genre_id, img_url, synopsis) VALUES ('The Matrix Revolutions','Everything that has a beginning has an end', 2003, 3, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/xr13oRVF3aZOJ2Pph4JLAk2gTnp.jpg', 'The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.');
INSERT INTO tb_movie (title, sub_title, year, genre_id, img_url, synopsis) VALUES ('Schindlers List','Whoever saves one life, saves the world entire', 1993, 2, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/1tqW1AcidWRQgmKJH1yRX9cyYuz.jpg', 'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.');
INSERT INTO tb_movie (title, sub_title, year, genre_id, img_url, synopsis) VALUES ('Saving Private Ryan','The mission is a man', 1998, 2, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/hjQp148VjWF4KjzhsD90OCMr11h.jpg', 'As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines.');
INSERT INTO tb_movie (title, sub_title, year, genre_id, img_url, synopsis) VALUES ('Frozen II','The past is not what it seems', 2019, 1, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/pNbmSYUtMd542OATplZIdtSWKyz.jpg', 'Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.');
INSERT INTO tb_movie (title, sub_title, year, genre_id, img_url, synopsis) VALUES ('Happy Halloween Scooby-Doo!','Scooby-Doo and Shaggys favorite holiday is upon us!', 2020, 1, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/5gTQmnGYKxDfmUWJ9GUWqrszRxN.jpg', 'Scooby-Doo and the gang team up with their pals, Bill Nye The Science Guy and Elvira Mistress of the Dark, to solve this mystery of gigantic proportions and save Crystal Cove!');
INSERT INTO tb_movie (title, sub_title, year, genre_id, img_url, synopsis) VALUES ('Maleficent: Mistress of Evil ','Go beyond the fairy tale', 2019, 4, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/odlWoWlQWuNuwrQL4BqfjCHUyAy.jpg', 'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.');
INSERT INTO tb_movie (title, sub_title, year, genre_id, img_url, synopsis) VALUES ('The Godfather','An offer you can not refuse.', 1972, 2, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg', 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family.');
INSERT INTO tb_movie (title, sub_title, year, genre_id, img_url, synopsis) VALUES ('Forrest Gump','Life is like a box of chocolates. You never know what you are gonna get', 1994, 2, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/tlEFuIlaxRPXIYVHXbOSAMCfWqk.jpg', 'A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.');

INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Excellent!', 1, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('So so', 2, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('So impressive!', 3, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Very good', 4, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Recommended', 5, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('I Do not like this', 6, 2);

