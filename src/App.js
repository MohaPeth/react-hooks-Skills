import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import MoviesData from './MoviesData';
import MovieList from './MovieList';
import AddMovieForm from './AddMovieForm'; // Import the AddMovieForm component

const App = () => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(-1);
  const [movies, setMovies] = useState(MoviesData);
  const addMovie = ({ title, description, posterURL, rating }) => {
    const newMovie = { title, description, posterURL, rating };
    setMovies([...movies,newMovie]);//Spread operator pour concatener mes 2tableaux, mon new et l'ancien.
    alert("Movie added!");
  }

  // Récupérer la liste de films en appelant le composant Movies

  useEffect(() => {
    if (titleFilter !== '') {
      const filteredMovies = movies.filter((movie) => {
        const isMatched = movie.title.includes(titleFilter)
        return isMatched;
      })
      setMovies(filteredMovies);
    }

    if (ratingFilter !== -1) {
      const filteredMovies = MoviesData.filter((movie) => {
        console.log("Rating filter in useEffect : ", ratingFilter)
        const isMatched = movie.rating === ratingFilter
        console.log("isMatched in useEffect : ", isMatched)
        return isMatched;
      })
      console.log('filteredMovies:', filteredMovies);
      setMovies(filteredMovies);
    } else {
      setMovies(MoviesData)
    }


  }, [titleFilter, ratingFilter])



  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold text-center py-5">
          Mes films préférés
        </h1>
        {/* Render the Filter component and pass filterMovies function as prop */}
        {/* Composant de filtre */}
        <Filter
          titleFilter={titleFilter}
          setTitleFilter={setTitleFilter}
          ratingFilter={ratingFilter}
          setRatingFilter={setRatingFilter}
        />
      </header>

      <main>
        

        {/* Composant de liste de films - Passer la liste de films, pas le composant lui-même */}
        <MovieList movies={movies} />
        {/* Composant de liste de films - Passer la liste de films, pas le composant lui-même */}
        <AddMovieForm addMovie={addMovie}  />
      </main>

      <footer>
        <p> Pieds de page </p>
      </footer>
    </div>
  );
};

export default App;
