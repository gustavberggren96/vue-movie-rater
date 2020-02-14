<template>
<div>
  <h3>Movie Title</h3>
  <h1>{{ $route.params.id}}</h1>
</div>
</template>

<script>
export default {
  name: "Movie",
//  props: ['movieId']
}
</script>

<style>

</style>