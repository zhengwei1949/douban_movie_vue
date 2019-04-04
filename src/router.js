import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Movie from './views/Movie.vue'
import Detail from './views/Detail.vue'
import SearchList from './views/SearchList.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/movie/:type', component: Movie},
    { path: '/', redirect:'/movie/in_theaters'},
    {path:'/detail/:id',component:Detail},
    { path:'/searchlist/:keyword',component:SearchList}
  ]
})
