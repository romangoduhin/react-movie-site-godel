export const SET_NOW_PLAYING_MOVIES = 'SET_NOW_PLAYING_MOVIES';
export const SET_UPCOMING_MOVIES = 'SET_UPCOMING_MOVIES';
export const SET_TOP_RATED_MOVIE = 'SET_TOP_RATED_MOVIE';
export const SET_POPULAR_MOVIE = 'SET_POPULAR_MOVIE';
export const SET_SEARCHING_ITEMS = 'SET_SEARCHING_ITEMS';
export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';

export const setNowPlayingMovies = (nowPlaying) => (
  {
    type: SET_NOW_PLAYING_MOVIES,
    nowPlaying,
  }
);

export const setTopRatedMovie = (topRated) => (
  {
    type: SET_TOP_RATED_MOVIE,
    topRated,
  }
);

export const setPopularMovie = (popular) => (
  {
    type: SET_POPULAR_MOVIE,
    popular,
  }
);

export const setUpcomingMovies = (upcoming) => (
  {
    type: SET_UPCOMING_MOVIES,
    upcoming,
  }
);

export const setSearchingItems = (searchingItems) => (
  {
    type: SET_SEARCHING_ITEMS,
    searchingItems,
  }
);

export const setTotalPages = (totalPages) => (
  {
    type: SET_TOTAL_PAGES,
    totalPages,
  }
);
