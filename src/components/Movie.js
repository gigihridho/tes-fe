import React from 'react';

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({title, poster_path, overvie, vote_average}) => (
    <div className="movie">
        <img src={IMAGE_API + poster_path} alt={title}/>
    </div>

);
export default Movie;