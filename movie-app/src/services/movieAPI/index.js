import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
});

const searchInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie',
});

const key = '666cf853efab2f680b858de0a083213f';

const movieAPI = {
  getNowPlayingMovies: async (page) => {
    const response = await instance.get(
      `/now_playing?&api_key=${key}&page=${page}`,
    );
    return response.data;
  },

  getTopRatedMovies: async (page) => {
    const response = await instance.get(
      `/top_rated?api_key=${key}&page=${page}`,
    );
    return response.data;
  },

  getPopularMovies: async (page) => {
    const response = await instance.get(
      `/popular?api_key=${key}&page=${page}`,
    );
    return response.data;
  },

  getUpcomingMovies: async () => {
    const response = await instance.get(
      `/upcoming?&api_key=${key}`,
    );
    return response.data;
  },

  getMovieById: async (movieId) => {
    const response = await instance.get(
      `/${movieId}?api_key=${key}`,
    );
    return response.data;
  },

  getMovieTrailers: async (movieId) => {
    const response = await instance.get(
      `/${movieId}/videos?api_key=${key}`,
    );
    return response.data;
  },

  getMovieReviews: async (movieId) => {
    const response = await instance.get(
      `/${movieId}/reviews?api_key=${key}`,
    );
    return response.data;
  },

  getSearchingItems: async (value) => {
    const response = await searchInstance.get(
      `?api_key=${key}&query=${value}`,
    );
    return response.data;
  },
};

export default movieAPI;
