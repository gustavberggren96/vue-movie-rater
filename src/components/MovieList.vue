<template>
  <div>
    <h1>Title</h1>
    <ul>
      <movie-item v-for="movie in allMovies" :key='movie.id' :movie='movie' v-on:change-fav="changeFav"></movie-item>
    </ul>
    <hr>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

import MovieItem from './MovieItem';
export default {
  name: 'MovieList',
  components: {
    MovieItem
  },
  /*data() {
    return {
      title: 'All Movies',
      movies: [
        {id: 1, title: 'Test Movie 1', favourite: false},
        {id: 2, title: 'Test Movie 2', favourite: true},
        {id: 3, title: 'Test Movie 3', favourite: false},
        {id: 4, title: 'Test Movie 1', favourite: false},
        {id: 5, title: 'Test Movie 2', favourite: true},
        {id: 6, title: 'Test Movie 3', favourite: false},
      ]
    }
  },*/
  methods: {
    ...mapActions(['fetchMovies']),
    changeFav(id) {
      const m = this.movies.find(d => d.id === id);
      m.favourite = !m.favourite;
    }
  },
  computed: mapGetters(['allMovies']),
  created() {
    this.fetchMovies();
  }

  
}
</script>
<style>
h1, h2 {
  font-weight: normal
}
ul {
  list-style-type: none;
  margin-left: auto;
  margin-right: auto;
  padding-left: 100px;
}
</style>
