import React from 'react';
import './App.css';
import { Redirect, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthPage from './views/AuthPage';
import NavBar from './components/NavBar';
import MovieIndexPageContainer from './views/MovieIndexPage/MovieIndexPageContainer';
import CategoryMoviesPageContainer from './views/CategoryMoviesPage/CategoryMoviesPageContainer';
import fire from './lib/Firebase/fire';
import { setAuthUserData } from './redux/actions/authActions';
import MoviesPageContainer from './views/MoviesPage/MoviesPageContainer';

function App() {
  const dispatch = useDispatch();

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(setAuthUserData(user.uid, user.email));
    }
  });

  return (
    <BrowserRouter>
      <NavBar />

      <Route exact path="/">
        <Redirect to="/movies" />
      </Route>

      <Route exact path="/movies" render={() => <MoviesPageContainer />} />

      <Route exact path="/movies/category/:path" render={() => <CategoryMoviesPageContainer />} />

      <Route exact path="/movies/:movieId" render={() => <MovieIndexPageContainer />} />

      <Route path="/login" render={() => <AuthPage path="login" />} />

      <Route path="/signup" render={() => <AuthPage path="signup" />} />
    </BrowserRouter>
  );
}

export default App;
