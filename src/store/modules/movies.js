//import Axios from "axios";


import axios from 'axios';

const state = {
  movies: [],
  movie: [],
};

const getters = {
  allMovies: (state) => state.movies,
  getMovie: (state) => state.movie,
};

const actions = {
  async fetchMovies({ commit }) {
    const response = await axios.get('http://localhost:8080/api/v1/movies');
    // TODO: get movies with axios call to spring application
    const temp = response.data.map(m => {
      m.id = m.movieId;
      delete m.movieId;
      return m;
    })
    // eslint-disable-next-line no-console
    console.log(temp);
    /*const temp = [
        {id: 1, title: 'Test Movie 1', favourite: false},
        {id: 2, title: 'Test Movie 2', favourite: true},
        {id: 3, title: 'Test Movie 3', favourite: false},
        {id: 4, title: 'Test Movie 1', favourite: false},
        {id: 5, title: 'Test Movie 2', favourite: true},
        {id: 6, title: 'Test Movie 3', favourite: false},
    ];*/
    commit('setMovies', temp)
  },

  async addToFavourites({ commit }, id) {

    commit('setFavourite', id);

  },
  
  async fetchMovieData({ commit }, id) {
    const response = await axios.get(`http://localhost:8080/api/v1/movies/${id}/cached`);
    const movie = response.data;
    const sum = movie.ratings.reduce((a, b) => a + b, 0);
    const avg = (sum / movie.ratings.length) || 0;
    movie.averageRating = avg;
    commit('setSelectedMovie', movie);
  }
};

const mutations = {
  setMovies: (state, movies) => (state.movies = movies),
  setFavourite: (state, id) => {
    const m = state.movies.find(d => d.id === id);
    m.favourite = !m.favourite;
  },
  setSelectedMovie: (state, movie) => (state.movie = movie)
};

export default {
  state,
  getters,
  actions,
  mutations
};