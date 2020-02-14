<template>
<div>
  <h3>Movie Title</h3>
  <h1>{{ $route.params.id}}</h1>
  <MovieDescription />
</div>
</template>

<script>
import MovieDescription from '../components/MovieDescription'
export default {
  name: "Movie",
  components: {
    MovieDescription
  }
//  props: ['movieId']
}
</script>

<style>

</style>