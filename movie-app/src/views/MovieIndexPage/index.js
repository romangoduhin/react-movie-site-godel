import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './index.module.scss';
import ModalWindow from '../../components/ModalWindow';
import Loader from '../../components/Loader';
import PlayButton from '../../components/PlayButton';
import Rating from '../../components/Rating';

function MovieIndexPage({ movie, reviews }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenTrailer = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.trailerBlock}>
        {movie.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
            alt="Movie Trailer"
          />
        )
          : <Loader />}

        <div className={style.overlay}>
          <PlayButton handleClick={handleOpenTrailer} />

          {isModalOpen
          && <ModalWindow movieId={movie.id} handleOpenTrailer={handleOpenTrailer} />}
        </div>
      </div>

      <div className={style.descriptionBlock}>
        <div className={style.description}>
          <div className={style.titleAndBudget}>
            <span className={style.title}>{movie.title}</span>

            <span className={style.budget}>
              {movie.budget}
              $
            </span>
          </div>

          <div className={style.movieInfo}>
            <div className={style.ratingAndRuntime}>
              <Rating vote={movie.vote_average} />

              <span>{!movie.runtime ? '' : `${movie.runtime} min`}</span>
            </div>

            {movie.genres.length === 0 ? '' : (
              <div className={style.genres}>
                {movie.genres.map((genre) => (
                  <div key={genre.id}>
                    {genre.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={style.otherInfo}>
            <div className={style.prodCountries}>
              <p>Countries</p>

              {!movie.production_countries ? 'No countries' : (
                <div>
                  {movie.production_countries.map((country) => (
                    <div key={country.name}>
                      {country.name}
                    </div>
                  ))}
                </div>
              )}

            </div>

            <div className={style.prodCompanies}>
              <p>Companies</p>

              {!movie.production_companies ? 'No companies' : (
                <div>
                  {movie.production_companies.map((company) => (
                    <div key={company.id}>
                      {company.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={style.overview}>
              <p>Overview</p>

              <div>{movie.overview}</div>
            </div>
          </div>
        </div>
      </div>

      {reviews.length === 0 ? 'No reviews' : (
        <div className={style.reviewsBlock}>
          {reviews.slice(0, 10).map((review) => (
            <div className={style.reviews} key={review.id}>
              <div className={style.author}>
                <span>{review.author}</span>

                <span>{review.created_at.slice(0, 10)}</span>
              </div>

              <div className={style.content}>{review.content}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

MovieIndexPage.defaultProps = {
  movie: {},
  reviews: [],
};

MovieIndexPage.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    vote_average: PropTypes.number,
    title: PropTypes.string,
    backdrop_path: PropTypes.string,
    budget: PropTypes.number,
    runtime: PropTypes.number,
    overview: PropTypes.string,
    production_companies: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
    production_countries: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
    genres: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
  }),
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    created_at: PropTypes.string,
    author: PropTypes.string,
  })),
};

export default MovieIndexPage;
