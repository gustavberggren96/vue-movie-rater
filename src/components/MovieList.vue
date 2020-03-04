<template>
  <div>
    <!--<input v-model="searchInput" v-on="this.searchFilter()" type="text" placeholder="Search Movies">-->
    <a-auto-complete
      :dataSource="dataSource"
      size="large"
      placeholder="input here"
      @select="onSelect"
      @search="handleSearch"
    >
      <a-input>
        <a-button slot="suffix" class="search-btn" size="large">
          <a-icon type="search" />
        </a-button>
      </a-input>
    </a-auto-complete>
    
    <ul>
      <movie-item v-for="movie in allMovies" :key='movie.id' :movie='movie' v-on:change-fav="changeFav"></movie-item>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

import MovieItem from './MovieItem';
export default {
  name: 'MovieList',
  data() {
    return {
      searchInput: "",
      dataSource: [],
    };
  },
  components: {
    MovieItem
  },
  methods: {
    ...mapActions(['fetchMovies', 'filteredSearch']),
    changeFav(id) {
      const m = this.movies.find(d => d.id === id);
      m.favourite = !m.favourite;
    },
    searchFilter(){
      // eslint-disable-next-line no-console
      //console.log(this.searchInput);
      this.filteredSearch(this.searchInput);
    },
    handleSearch(value) {
      this.filteredSearch(value);
      this.dataSource = !value ? [] : this.getFilteredMovies.map(m => m.title);
      // eslint-disable-next-line no-console
      console.log(this.getFilteredMovies.map(m => m.title));
    },
    onSelect(value) {
      // eslint-disable-next-line no-console
      console.log('onSelect', value);
    }
  },
  computed: mapGetters(['allMovies', 'getFilteredMovies']),
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
