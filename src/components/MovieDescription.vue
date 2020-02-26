<template>
  <div>
    <a-collapse :bordered="false">
      <h1 >{{ this.getMovie && this.getMovie.title ? this.getMovie.title : "No" }}</h1>
      <img :src="this.getMovie.posterurl">
      <a-collapse-panel header="Genres">
        <ul>
          <li v-for="(genre, index) in getMovie.genres" :key="`genre-${index}`">
            {{genre}}
          </li>
        </ul>
      </a-collapse-panel>
      <a-collapse-panel header="Actors">
        <ul>
          <li v-for="(actor, index) in getMovie.actors" :key="`actor-${index}`">
            {{actor}}
          </li>
        </ul>
      </a-collapse-panel>
    </a-collapse>
    <a-rate :defaultValue="2.5" :value=getMovie.averageRating :count=10 disabled  allowHalf/>
        
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "MovieDescription",
  methods: {
    ...mapActions(['fetchMovieData']),
  },
  computed: mapGetters(['getMovie']),
  created() {
    this.fetchMovieData(this.id)
  },
  props: {
    id: String
  }
  /*props: {
    title: String,
    id: Number,
    year: String,
    genres: Array,
    ratings: Array,
    contentRating: String,
    duration: String,
    releaseDate: String,
    averageRating: Number,
    storyline: String,
    actors: Array,
    imdbRating: Number,
  }*/

}
</script>

<style>

</style>