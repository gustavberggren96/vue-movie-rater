//import Vue from 'vue';
//import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Movie from './views/Movie.vue';

const routes = [
  { path: '/', component: Home},
  { path: '/about', component: About},
  { path: '/movies/:id', component: Movie}
];

export default routes;

//Vue.use(Router);
/*
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})*/