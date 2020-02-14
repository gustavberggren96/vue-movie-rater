<template>
  <div>
    <a-collapse :bordered="false">
      <h1>Movie header</h1>
      <a-collapse-panel header="Genres">
        <p>laøkdjløkdjafløkdjafløksdjløkadjløkdjaf</p>
      </a-collapse-panel>
      <a-collapse-panel header="Actors">
        <p>laøkdjløkdjafløkdjafløksdjløkadjløkdjaf</p>
      </a-collapse-panel>
    </a-collapse>
    <a-rate :defaultValue="2.5" count="10" disabled  allowHalf/>
        
  </div>
</template>

<script>
export default {
  name: "MovieDescription",
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