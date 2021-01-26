import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.scss';
import fire from '../../lib/Firebase/fire';
import { cleanAuthUserData } from '../../redux/actions/authActions';
import { setSearchingItems } from '../../redux/actions/moviesActions';
import moviesAPI from '../../services/movieAPI';
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg';
import { ReactComponent as BurgerIcon } from '../../assets/BurgerIcon.svg';
import { ReactComponent as CloseIcon } from '../../assets/CloseIcon.svg';
import Overlay from '../Overlay';

function NavBar() {
  const { userId } = useSelector((state) => state.auth);
  const { searchingItems } = useSelector((state) => state.movies);

  const [value, setValue] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const dispatch = useDispatch();

  const switchMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const switchSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const clearInput = () => {
    setValue('');
  };

  const handleClick = () => {
    const getSearchingItem = async () => {
      const { results } = await moviesAPI.getSearchingItems(value);
      dispatch(setSearchingItems(results));
    };
    getSearchingItem();
    clearInput();
  };

  const handleChange = (event) => {
    const getSearchingItem = async () => {
      const { results } = await moviesAPI.getSearchingItems(event.target.value);
      dispatch(setSearchingItems(results));
    };
    getSearchingItem();
    setValue(event.target.value);
  };

  const handleLogout = () => {
    dispatch(cleanAuthUserData());
    fire.auth().signOut();
  };

  return (
    <div className={style.wrapper}>
      {isMenuOpen ? <Overlay handleClick={switchMenuToggle} /> : ''}

      <div className={style.navBar}>
        <div className={isSearchOpen ? `${style.menuBlock} ${style.menuBlockClose}` : style.menuBlock}>
          <BurgerIcon onClick={switchMenuToggle} className={style.burgerIcon} />

          <div
            role="presentation"
            onClick={switchMenuToggle}
            className={isMenuOpen ? `${style.burgerMenu} ${style.burgerMenuOpen}` : `${style.burgerMenu} ${style.burgerMenuClose}`}
          >
            <CloseIcon className={style.burgerIcon} />

            <NavLink to="/movies">main page</NavLink>
            <NavLink to="/movies/category/nowplaying">now playing</NavLink>
            <NavLink to="/movies/category/popular">popular</NavLink>
            <NavLink to="/movies/category/toprated">top rated</NavLink>

            {userId
              ? <NavLink to="/login" onClick={handleLogout}>logout</NavLink>
              : (
                <>
                  <NavLink to="/login">login</NavLink>
                  <NavLink to="/signup">Sign up</NavLink>
                </>
              )}
          </div>

          <div className={style.title}>
            <NavLink to="/movies">Moo Oui.com</NavLink>
          </div>
        </div>

        <div className={isSearchOpen ? `${style.searchBlock} ${style.searchOpen}` : style.searchBlock}>
          <div className={style.inputBlock}>
            <input
              className={style.input}
              placeholder="Type here..."
              type="text"
              value={value}
              onChange={handleChange}
            />

            <button
              type="button"
              onClick={() => {
                handleClick();
                switchSearchToggle();
              }}
            >
              <NavLink to="/movies/category/searching">search</NavLink>
            </button>
          </div>

          <div
            role="presentation"
            onClick={() => {
              switchSearchToggle();
              clearInput();
            }}
            className={style.iconBlock}
          >
            <SearchIcon className={style.searchIcon} />
          </div>
        </div>
      </div>

      <div className={value !== '' ? `${style.dropDownList} ${style.dropDownListOpen}` : style.dropDownList}>
        {value && searchingItems.map((movie) => (
          <div
            key={movie.id}
            role="presentation"
            onClick={() => {
              clearInput();
              switchSearchToggle();
            }}
          >
            <NavLink to={`/movies/${movie.id}`}>
              <span>{movie.title}</span>
              <span>{movie.vote_average}</span>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
