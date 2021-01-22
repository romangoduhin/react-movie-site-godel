import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './index.module.scss';
import ModalWindow from '../ModalWindow';
import Loader from '../Loader';
import Rating from '../Rating';
import PlayButton from '../PlayButton';

function MoviePoster({ movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openedMovieId, setOpenedMovieId] = useState(null);

  const handleOpenTrailer = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (!movie.id) return <Loader />;

  return (
    <div className={style.moviePoster}>
      <div className={style.vote}><Rating vote={movie.vote_average} /></div>

      <div className={style.movie}>
        <div className={style.imageHolder}>
          {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="poster" />
            : <Loader />}
        </div>

        <div className={style.overlay}>
          <PlayButton handleClick={() => {
            handleOpenTrailer();
            setOpenedMovieId(movie.id);
          }}
          />

          {isModalOpen && (
          <ModalWindow
            movieId={openedMovieId}
            handleOpenTrailer={handleOpenTrailer}
          />
          )}
        </div>
      </div>

      <div className={style.title}>
        <NavLink to={`/movies/${movie.id}`}>
          {movie.title}
        </NavLink>
      </div>
    </div>
  );
}

MoviePoster.defaultProps = {
  movie: {},
};

MoviePoster.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default MoviePoster;
