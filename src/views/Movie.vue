<template>
<div>
  <MovieDescription :id="$route.params.id" />
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