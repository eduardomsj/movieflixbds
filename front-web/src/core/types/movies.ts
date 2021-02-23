export type MoviesResponse = {
    content: Movie[],
    totalPages: number
}

export type Movie = {
    id: number,
    title: string,
    subTitle: string,
    year: number,
    imgUrl: string,
    synopsis: string,
    genreId: number | string,
    reviews: Review[]
}

export type ReviewResponse = {
    contentReview: Review[]
}

export type Review = {
    id: number,
    text: string,
    movieId: number,
    user: User,
}

export type Genre={
    id: number,
    name: string,
    movies?: Movie[]
}

export type User = {
    id: number,
    name: string,
    email: string
}