import moviesReducer from '../moviesReducer';

const initialState = {
  nowPlaying: [],
  topRated: [],
  popular: [],
  upcoming: [],
  searchingItems: [],
};

const testData = [
  {
    id: 1,
    title: 'Angel A',
  },
];

describe('moviesReducer SET_NOW_PLAYING_MOVIES', () => { // tests for moviesReducer SET_NOW_PLAYING_MOVIES
  it('should get with data', () => {
    let state;
    state = moviesReducer(initialState, {
      type: 'SET_NOW_PLAYING_MOVIES',
      nowPlaying: testData,
    });

    expect(state.nowPlaying).toEqual(testData);
  });
});

describe('moviesReducer SET_TOP_RATED_MOVIE', () => { // tests for moviesReducer SET_TOP_RATED_MOVIE
  it('should get with data', () => {
    let state;
    state = moviesReducer(initialState, {
      type: 'SET_TOP_RATED_MOVIE',
      topRated: testData,
    });

    expect(state.topRated).toEqual(testData);
  });
});

describe('moviesReducer SET_POPULAR_MOVIE', () => { // tests for moviesReducer SET_POPULAR_MOVIE
  it('should get with data', () => {
    let state;
    state = moviesReducer(initialState, {
      type: 'SET_POPULAR_MOVIE',
      popular: testData,
    });

    expect(state.popular).toEqual(testData);
  });
});

describe('moviesReducer SET_UPCOMING_MOVIES', () => { // tests for moviesReducer SET_UPCOMING_MOVIES
  it('should get with data', () => {
    let state;
    state = moviesReducer(initialState, {
      type: 'SET_UPCOMING_MOVIES',
      upcoming: testData,
    });

    expect(state.upcoming).toEqual(testData);
  });
});

describe('moviesReducer SET_SEARCHING_ITEMS', () => { // tests for moviesReducer SET_SEARCHING_ITEMS
  it('should get with data', () => {
    let state;
    state = moviesReducer(initialState, {
      type: 'SET_SEARCHING_ITEMS',
      searchingItems: testData,
    });

    expect(state.searchingItems).toEqual(testData);
  });
});

describe('moviesReducer SET_TOTAL_PAGES', () => { // tests for moviesReducer SET_TOTAL_PAGES
  it('should get with data', () => {
    let state;
    state = moviesReducer(initialState, {
      type: 'SET_TOTAL_PAGES',
      totalPages: 2,
    });

    expect(state.totalPages).toEqual(2);
  });
});

describe('moviesReducer without initialState', () => { // tests for moviesReducer without initialState
  it('', () => {
    let state;
    state = moviesReducer(undefined, {
      type: 'SET_NOW_PLAYING_MOVIES',
      nowPlaying: testData,
    });
    expect(state.nowPlaying).toEqual(testData);
  });
});

describe('moviesReducer without action data', () => { // tests for moviesReducer without action data
  it('', () => {
    let state;
    state = moviesReducer(initialState, {});

    expect(state).toEqual(initialState);
  });
});

describe('moviesReducer with wrong type', () => { // tests for moviesReducer with wrong type
  it('should dont get', () => {
    let state;
    state = moviesReducer(initialState, {
      type: 'SET_NNN',
      payload: testData,
    });

    expect(state).toEqual(initialState);
  });
});
