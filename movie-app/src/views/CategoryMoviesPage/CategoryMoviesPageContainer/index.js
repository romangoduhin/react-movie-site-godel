import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CategoryMoviesPage from '../index';
import Loader from '../../../components/Loader';
import { setCurrentMovieTypeThunk } from '../../../redux/thunks/moviesThunks';

function CategoryMoviesPageContainer() {
  const {
    nowPlaying, topRated, popular, searchingItems, totalPages,
  } = useSelector((state) => state.movies);

  const [currentPage, setCurrentPage] = useState(1);

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
    dispatch(setCurrentMovieTypeThunk(currentCategory, currentPage));
  }, [currentPage, currentCategory]);

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
