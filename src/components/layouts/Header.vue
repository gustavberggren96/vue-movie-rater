<template>
  <header class="header">
    <h1 id="title">Movie Rater App</h1>
    <div>
      <a-menu mode="horizontal" theme="dark" id="nav">
        <a-menu-item key="1">
          <router-link to="/">Home</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/about">About</router-link>
        </a-menu-item>
      </a-menu>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header"
}
</script>
<style scoped>
  #title{
    color: #fff;
  }
  .header {
    background: #001529;
    color: #fff;
    text-align: center;
    padding: 10px;
  }

  .header a {
    color: #fff;
    padding-right: 5px;
  }
  #nav {
    display: block;
    text-align: center;
    
  }
</style>