<template>
  <li>
    <a-card hoverable style="width: 300px">
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        slot="cover"
      />
      <template class="ant-card-actions" slot="actions">
          <a-icon  @click="$emit('change-fav', movie.id)" type="star" :theme="movie.favourite ? 'filled' : 'outlined'" />
      </template>
      <a-card-meta :title="movie.title">
      </a-card-meta>
    </a-card>
  </li>
</template>
<script>
export default {
  name: 'MovieItem',
  props: [
    'movie'
  ],
  methods: {
    test() {
      print("test")
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