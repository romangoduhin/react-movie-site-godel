import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieAPI from '../../../services/movieAPI';
import MovieIndexPage from '../index';
import Loader from '../../../components/Loader';
import withAuthRedirect from '../../../hoc/withAuthRedirect';

function MovieIndexPageContainer() {
  const [currentMovie, setCurrentMovie] = useState([]);
  const [movieReviews, setMovieReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getCurrentMovie = async () => {
      const movie = await movieAPI.getMovieById(movieId);
      setCurrentMovie(movie);
    };

    const getCurrentMovieReviews = async () => {
      const { results } = await movieAPI.getMovieReviews(movieId);
      setMovieReviews(results);
    };
    getCurrentMovie();
    getCurrentMovieReviews();
  }, [movieId]);

  if (!Object.prototype.hasOwnProperty.call(currentMovie, 'id')) return <Loader />;

  return <MovieIndexPage movie={currentMovie} reviews={movieReviews} />;
}

export default withAuthRedirect(MovieIndexPageContainer);
