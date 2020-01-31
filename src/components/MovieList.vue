<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <movie-item v-for="movie in movies" :key='movie.id' :movie='movie'></movie-item>
    </ul>
    <hr>
  </div>
</template>
<script>
import MovieItem from './MovieItem';
export default {
  name: 'MovieList',
  components: {
    MovieItem
  },
  data() {
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
