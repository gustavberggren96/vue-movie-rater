<template>
  <li>
    <a-card id="card" hoverable style="width: 300px; cursor: default;">
      <img
        style="cursor: pointer;"
        alt="example"
        :src="movie.posterurl"
        slot="cover"
        @click="this.test"
        height="400 px"
      />
      
      <a-card-meta 
        style="cursor: pointer;"
        :title="movie.title"
        @click="this.test"
      >
      </a-card-meta>
      <template id="actions" class="ant-card-actions" slot="actions">
          <a-icon  
            @click="addToFavourites(movie.id)"
            type="star"
            :theme="movie.favourite ? 'filled' : 'outlined'"
            :style="movie.favourite ? { fontSize: '16px', color: '#08c' } : {}"
          />
      </template>
    </a-card>
  </li>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'MovieItem',
  props: [
    'movie'
  ],
  methods: {
    ...mapActions(['addToFavourites', 'clearMovieData']),
    test() {
      // eslint-disable-next-line no-console
      console.log("Test");
      this.clearMovieData();
      this.$router.push('/movies/'+this.movie.id);
    }
  }
}
</script>
<style>
  li {
    float: left;
    margin: 10px 10px;
    padding: 10px 10px;
  }
  #actions:hover{
      cursor: default;
    
  }
</style>