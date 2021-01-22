import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoviesPage from '../index';
import moviesAPI from '../../../services/movieAPI';
import {
  setNowPlayingMovies,
  setPopularMovie,
  setTopRatedMovie,
  setUpcomingMovies,
} from '../../../redux/actions/moviesActions';
import Loader from '../../../components/Loader';

function MoviesPageContainer() {
  const {
    nowPlaying, topRated, popular, upcoming,
  } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const { results } = await moviesAPI.getNowPlayingMovies();
      dispatch(setNowPlayingMovies(results));
    };

    const getUpcomingMovies = async () => {
      const { results } = await moviesAPI.getUpcomingMovies();
      dispatch(setUpcomingMovies(results));
    };

    const getTopRatedMovies = async () => {
      const { results } = await moviesAPI.getTopRatedMovies();
      dispatch(setTopRatedMovie(results));
    };

    const getPopularMovies = async () => {
      const { results } = await moviesAPI.getPopularMovies();
      dispatch(setPopularMovie(results));
    };

    if (upcoming.length === 0) {
      getUpcomingMovies();
    }
    if (nowPlaying.length === 0) {
      getNowPlayingMovies();
    }
    if (topRated.length === 0) {
      getTopRatedMovies();
    }
    if (popular.length === 0) {
      getPopularMovies();
    }
  }, []);

  if (nowPlaying.length === 0
    || topRated.length === 0
    || popular.length === 0
    || upcoming.length === 0) return <Loader />;

  return (
    <MoviesPage nowPlaying={nowPlaying} topRated={topRated} popular={popular} upcoming={upcoming} />
  );
}

export default MoviesPageContainer;
