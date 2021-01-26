import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.scss';
import { ReactComponent as PlayIcon } from '../../assets/PlayIcon.svg';

function PlayButton({ handleClick }) {
  return (
    <PlayIcon
      className={style.playButton}
      onClick={() => {
        handleClick();
      }}
    />
  );
}

PlayButton.defaultProps = {
  handleClick: () => {
  },
};

PlayButton.propTypes = {
  handleClick: PropTypes.func,
};

export default PlayButton;
