import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.scss';

function Rating({ vote }) {
  return <div className={style.vote}>{vote}</div>;
}

Rating.defaultProps = {
  vote: 0,
};

Rating.propTypes = {
  vote: PropTypes.number,
};

export default Rating;
