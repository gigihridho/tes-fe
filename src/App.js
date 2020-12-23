import React, {useEffect, useState} from 'react';
import Movie from "./components/Movie";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aa6eb3d22344367f1adc2d61dd5eaffa&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie&?api_key=aa6eb3d22344367f1adc2d61dd5eaffa&query=";

function App() {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect( () => {
      getMovies(FEATURED_API);
    }, []);

    const getMovies = (API) => {
      fetch(API)
        .then((res) => res.json())
        .then((data) => {
            setMovies(data.results);
      });
    };

    const handleOnSubmit = (e) => {
      e.preventDefault();

      if(searchTerm){
        getMovies(SEARCH_API + searchTerm);
        setSearchTerm("");
      }
    };

    const handleOnChange = (e) => {
      setSearchTerm(e.target.value);
    };

    return (
      <>
        <header>
          <form onSubmit={handleOnSubmit}>
            <input 
              type="search" 
              placeholder="Search..." 
              className="search"
              value={searchTerm}
              onChange={handleOnChange}
            />
          </form>
        </header>
        <div className="movie-container">
          {movies.length > 0 && 
            movies.map((movie) => <Movie 
              key={movie.id} {...movie} />
          )}
        </div>
      </>
    );
}

export default App;
