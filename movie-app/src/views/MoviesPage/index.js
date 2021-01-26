import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './index.module.scss';
import MoviesList from '../../components/MoviesList';
import Loader from '../../components/Loader';
import ModalWindow from '../../components/ModalWindow';
import PlayButton from '../../components/PlayButton';

function MoviesPage({
  nowPlaying, topRated, popular, upcoming,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openedMovieId, setOpenedMovieId] = useState(null);

  const handleOpenTrailer = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.upcomingMovieWrapper}>
        <div className={style.upcomingMovie}>
          {upcoming[1].backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w1280/${upcoming[1].backdrop_path}`}
              alt="Upcoming Movie"
            />
          )
            : <Loader />}

          <div className={style.description}>
            <div className={style.overlay}>
              <div className={style.overview}>
                <NavLink to={`/movies/${upcoming[1].id}`}>
                  {upcoming[1].overview}
                </NavLink>
              </div>

              <div className={style.trailer}>
                <PlayButton handleClick={() => {
                  handleOpenTrailer();
                  setOpenedMovieId(upcoming[1].id);
                }}
                />

                {isModalOpen && (
                <ModalWindow
                  movieId={openedMovieId}
                  handleOpenTrailer={handleOpenTrailer}
                />
                )}
              </div>

              <div className={style.list}>
                <NavLink to={`/movies/${upcoming[1].id}`}>
                  <ul>
                    <li>{upcoming[1].title}</li>
                    <li>{upcoming[1].vote_average}</li>
                    <li>{upcoming[1].release_date}</li>
                  </ul>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MoviesList title="Now Playing" path="movies/category/nowplaying" movies={nowPlaying} />
      <MoviesList title="Top Rated" path="movies/category/toprated" movies={topRated} />
      <MoviesList title="Popular" path="movies/category/popular" movies={popular} />
    </div>
  );
}

MoviesPage.defaultProps = {
  nowPlaying: [],
  topRated: [],
  popular: [],
  upcoming: [],
};

MoviesPage.propTypes = {
  nowPlaying: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })),
  topRated: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })),
  popular: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })),
  upcoming: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    backdrop_path: PropTypes.string,
    overview: PropTypes.string,
  })),
};

export default MoviesPage;
