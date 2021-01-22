import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Portal from './Portal';
import style from './index.module.scss';
import movieAPI from '../../services/movieAPI';
import Loader from '../Loader';
import Overlay from '../Overlay';

function ModalWindow({ movieId, handleOpenTrailer }) {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const getCurrentMovieTrailers = async () => {
      const { results } = await movieAPI.getMovieTrailers(movieId);
      if (results.length !== 0) setTrailerKey(results[0].key);
    };
    getCurrentMovieTrailers();
  }, [movieId]);

  if (!trailerKey) {
    return (
      <Portal>
        <div className={style.content}>
          <Overlay handleClick={handleOpenTrailer} />

          <Loader />
        </div>
      </Portal>
    );
  }

  return (
    <Portal>
      <div className={style.content}>
        <Overlay handleClick={handleOpenTrailer} />

        <iframe
          title="Trailer video"
          className={style.trailer}
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=0`}
        />
      </div>
    </Portal>
  );
}

ModalWindow.defaultProps = {
  movieId: 0,
  handleOpenTrailer: () => {
  },
};

ModalWindow.propTypes = {
  movieId: PropTypes.number,
  handleOpenTrailer: PropTypes.func,
};

export default ModalWindow;
