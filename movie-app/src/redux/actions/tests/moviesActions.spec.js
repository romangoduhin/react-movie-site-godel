import * as actions from '../moviesActions';

const testData = [
  {
    id: 1,
    title: 'Angel A',
  },
];

describe('moviesActions', () => {
  it('should create an action setNowPlayingMovies ', () => {
    const expectedAction = {
      type: 'SET_NOW_PLAYING_MOVIES',
      nowPlaying: testData,
    };
    expect(actions.setNowPlayingMovies(testData)).toEqual(expectedAction);
  });

  it('should create an action setTopRatedMovie ', () => {
    const expectedAction = {
      type: 'SET_TOP_RATED_MOVIE',
      topRated: testData,
    };
    expect(actions.setTopRatedMovie(testData)).toEqual(expectedAction);
  });

  it('should create an action setPopularMovie ', () => {
    const expectedAction = {
      type: 'SET_POPULAR_MOVIE',
      popular: testData,
    };
    expect(actions.setPopularMovie(testData)).toEqual(expectedAction);
  });

  it('should create an action setUpcomingMovies ', () => {
    const expectedAction = {
      type: 'SET_UPCOMING_MOVIES',
      upcoming: testData,
    };
    expect(actions.setUpcomingMovies(testData)).toEqual(expectedAction);
  });

  it('should create an action setSearchingItems ', () => {
    const expectedAction = {
      type: 'SET_SEARCHING_ITEMS',
      searchingItems: testData,
    };
    expect(actions.setSearchingItems(testData)).toEqual(expectedAction);
  });

  it('should create an action setTotalPages ', () => {
    const expectedAction = {
      type: 'SET_TOTAL_PAGES',
      totalPages: 2,
    };
    expect(actions.setTotalPages(2)).toEqual(expectedAction);
  });
});
