<template>
  <div>
    <div id="spinner" v-if="this.getMovie && this.getMovie.loading">
      <a-spin />
    </div>
    <div  v-else>
      <h1 >{{ this.getMovie.title }}</h1>
      <a-rate :defaultValue="0" :value=getMovie.averageRating :count=10 disabled  allowHalf/>
      <h2>{{ this.getMovie.year }}</h2>
      <img :src="this.getMovie.posterurl">
      <a-divider>Storyline</a-divider>
      <p class="storyline">{{ this.getMovie.storyline}}</p>
      <a-divider />
      <a-collapse :bordered="false" class="wrapper">
        <a-collapse-panel header="Genres">
          <ul class="colapse">
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
      
    </div>
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
#spinner{
  padding: 10%;
}
.wrapper{
  text-align: center;

}
.wrapper .ul{
  display: inline-block;
  margin: 0;
  padding: 0;
}
.wrapper .li{
  float: left;
  padding: 2px 5px;
  border: 1px solid black;
}

.storyline{
  padding-left: 15%;
  padding-right: 15%; 
  text-align: left;
}

</style>