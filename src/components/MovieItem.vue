<template>
  <li>
    <a-card style="width: 300px">
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        slot="cover"
        @click="$router.push('/movies/'+movie.id)"
      />
      
      <a-card-meta 
        :title="movie.title"
        @click="$router.push('/movies/'+movie.id)"
      >
      </a-card-meta>
      <template class="ant-card-actions" slot="actions">
          <a-icon  @click="addToFavourites(movie.id)" type="star" :theme="movie.favourite ? 'filled' : 'outlined'" />
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
    ...mapActions(['addToFavourites']),
    test() {
      //
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
</style>