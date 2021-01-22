import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moviesAPI from '../../../services/movieAPI';
import {
  setNowPlayingMovies,
  setPopularMovie,
  setTopRatedMovie,
} from '../../../redux/actions/moviesActions';
import CategoryMoviesPage from '../index';
import Loader from '../../../components/Loader';

function CategoryMoviesPageContainer() {
  const {
    nowPlaying, topRated, popular, searchingItems,
  } = useSelector((state) => state.movies);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { path } = useParams();

  const dispatch = useDispatch();

  const currentCategory = path;

  const movieCategory = {
    nowplaying: nowPlaying,
    toprated: topRated,
    popular,
    searching: searchingItems,
  };

  const categoryTitle = {
    nowplaying: 'Now Playing',
    toprated: 'Top Rated',
    popular: 'Popular',
    searching: 'Searching',
  };

  const handleChangePage = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const getNowPlayingMovies = async () => {
      const { results, total_pages } = await moviesAPI.getNowPlayingMovies(currentPage);
      dispatch(setNowPlayingMovies(results));
      setTotalPages(total_pages);
    };

    const getTopRatedMovies = async () => {
      const { results, total_pages } = await moviesAPI.getTopRatedMovies(currentPage);
      dispatch(setTopRatedMovie(results));
      setTotalPages(total_pages);
    };

    const getPopularMovies = async () => {
      const { results, total_pages } = await moviesAPI.getPopularMovies(currentPage);
      dispatch(setPopularMovie(results));
      setTotalPages(total_pages);
    };

    if (currentCategory === 'nowplaying') {
      getNowPlayingMovies();
    } else if (currentCategory === 'toprated') {
      getTopRatedMovies();
    } else if (currentCategory === 'popular') {
      getPopularMovies();
    }
  }, [currentPage, path]);

  if (movieCategory[currentCategory] === 0 && totalPages === 0) return <Loader />;

  return (
    <CategoryMoviesPage
      movies={movieCategory[currentCategory]}
      totalPages={totalPages}
      currentPage={currentPage}
      onChangePage={handleChangePage}
      title={categoryTitle[currentCategory]}
    />
  );
}

export default CategoryMoviesPageContainer;
