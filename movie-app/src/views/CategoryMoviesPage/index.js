import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './index.module.scss';
import MoviePoster from '../../components/MoviePoster';

function CategoryMoviesPage({
  movies, totalPages, currentPage, onChangePage, title,
}) {
  const [sorted, setSorted] = useState(false);

  const pages = [];

  for (let i = 1; i <= (totalPages > 40 ? 40 : totalPages); i += 1) {
    pages.push(i);
  }

  const handleSetSorted = () => {
    setSorted(!sorted);
  };

  const sortByVote = () => movies.slice().sort((a, b) => {
    if (a.vote_average > b.vote_average) return -1;
    return '';
  });

  return (
    <div className={style.wrapper}>
      <div className={style.categoryTitle}>
        <p>{title}</p>

        {title === 'Top Rated' ? '' : (
          <button
            type="button"
            onClick={handleSetSorted}
            value="Click to sort"
            className={sorted ? style.activeButton : style.inactiveButton}
          >
            Sort by
            vote
          </button>
        )}
      </div>

      <div className={style.moviePoster}>
        {(sorted === false ? sortByVote() : movies).slice(0, 18).map((movie) => (
          <div key={movie.id} className={style.movie}>
            <MoviePoster movie={movie} />
          </div>
        ))}
      </div>

      {(title !== 'Searching') ? (
        <div className={style.pageList}>
          {pages.map((page) => (
            <span
              role="presentation"
              className={currentPage === page ? style.selectPage : style.listItem}
              key={page}
              onClick={() => {
                onChangePage(page);
              }}
            >
              {page}
            </span>
          ))}
        </div>
      ) : ''}
    </div>
  );
}

CategoryMoviesPage.defaultProps = {
  movies: [],
  totalPages: 0,
  currentPage: 1,
  onChangePage: () => {
  },
  title: '',
};

CategoryMoviesPage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })),
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  onChangePage: PropTypes.func,
  title: PropTypes.string,
};

export default CategoryMoviesPage;
