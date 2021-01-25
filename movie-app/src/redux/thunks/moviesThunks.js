import moviesAPI from '../../services/movieAPI';
import {
  setNowPlayingMovies,
  setPopularMovie,
  setTopRatedMovie,
  setTotalPages,
  setUpcomingMovies,
} from '../actions/moviesActions';

export const setAllMoviesTypesThunk = () => (dispatch) => {
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
  getUpcomingMovies();
  getNowPlayingMovies();
  getTopRatedMovies();
  getPopularMovies();
};

export const setCurrentMovieTypeThunk = (currentCategory, currentPage) => (dispatch) => {
  const getNowPlayingMovies = async () => {
    const { results, total_pages } = await moviesAPI.getNowPlayingMovies(currentPage);
    dispatch(setNowPlayingMovies(results));
    dispatch(setTotalPages(total_pages));
  };

  const getTopRatedMovies = async () => {
    const { results, total_pages } = await moviesAPI.getTopRatedMovies(currentPage);
    dispatch(setTopRatedMovie(results));
    dispatch(setTotalPages(total_pages));
  };

  const getPopularMovies = async () => {
    const { results, total_pages } = await moviesAPI.getPopularMovies(currentPage);
    dispatch(setPopularMovie(results));
    dispatch(setTotalPages(total_pages));
  };

  if (currentCategory === 'nowplaying') {
    getNowPlayingMovies();
  } else if (currentCategory === 'toprated') {
    getTopRatedMovies();
  } else if (currentCategory === 'popular') {
    getPopularMovies();
  }
};
