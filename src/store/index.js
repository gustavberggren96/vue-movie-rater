import Vuex from 'vuex';
import Vue from 'vue';
import movies from './modules/movies'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    movies
  }
})