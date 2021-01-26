import {
  SET_NOW_PLAYING_MOVIES,
  SET_TOP_RATED_MOVIE,
  SET_POPULAR_MOVIE,
  SET_SEARCHING_ITEMS,
  SET_UPCOMING_MOVIES,
  SET_TOTAL_PAGES,
} from '../actions/moviesActions';

const initialState = {
  nowPlaying: [],
  topRated: [],
  popular: [],
  upcoming: [],
  searchingItems: [],
  totalPages: 1,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOW_PLAYING_MOVIES:
      return {
        ...state,
        nowPlaying: [...action.nowPlaying],
      };

    case SET_TOP_RATED_MOVIE:
      return {
        ...state,
        topRated: [...action.topRated],
      };

    case SET_POPULAR_MOVIE:
      return {
        ...state,
        popular: [...action.popular],
      };

    case SET_UPCOMING_MOVIES:
      return {
        ...state,
        upcoming: [...action.upcoming],
      };

    case SET_SEARCHING_ITEMS:
      return {
        ...state,
        searchingItems: [...action.searchingItems],
      };

    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.totalPages,
      };

    default:
      return state;
  }
};

export default moviesReducer;
