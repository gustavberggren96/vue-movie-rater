import axios from 'axios';
import _ from "lodash";

const state = {
  movies: [],
  selectedMovie: {loading: true},
  filteredMovies:[],
};

const getters = {
  allMovies: (state) => state.movies,
  getMovie: (state) => state.selectedMovie,
  getFilteredMovies: (state) => state.filteredMovies,
};

const actions = {
  async fetchMovies({ commit }) {
    const response = await axios.get('http://localhost:8080/api/v1/movies');
    const temp = response.data.map(m => {
      m.id = m.movieId;
      delete m.movieId;
      return m;
    })
    commit('setMovies', temp)
  },

  async addToFavourites({ commit }, id) {

    commit('setFavourite', id);

  },
  
  async fetchMovieData({ commit }, id) {
    // eslint-disable-next-line no-console
    console.log("Fetch movie data");
    const response = await axios.get(`http://localhost:8080/api/v1/movies/${id}/cached`);
    const movie = {...response.data};
    // calculate average rating
    const sum = movie.ratings.reduce((a, b) => a + b, 0);
    const avg = (sum / movie.ratings.length) || 0;
    movie.averageRating = avg;
    movie.loading = false;
    commit('setSelectedMovie', movie);
  },
  async clearMovieData({ commit }) {
    commit('setSelectedMovie', {loading: true});
  },
  async filteredSearch({ commit }, input) {
    const searchFilter = movie => {
      return movie.title.toLowerCase().match(input.toLowerCase());
    };
    const filtered = _.filter(state.movies, searchFilter);
    commit('setFilteredMovies', filtered);
  }
};

const mutations = {
  setMovies: (state, movies) => (state.movies = movies),
  setFavourite: (state, id) => {
    const m = state.movies.find(d => d.id === id);
    m.favourite = !m.favourite;
  },
  setSelectedMovie: (state, selectedMovie) => (state.selectedMovie = selectedMovie),
  setFilteredMovies: (state, filteredMovies) => (state.filteredMovies = filteredMovies)
};

export default {
  state,
  getters,
  actions,
  mutations
};