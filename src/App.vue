<template>
  <div id="app">
    <!-- 顶部导航栏开始 -->
    <div class="top">
        <div class="header">
            <a href="#/home_page" style="font-weight: bold;color:aqua;font-size:30px;">豆瓣电影</a>
            <div class="search">
                <input class="my-input" type="text" placeholder="电影搜索" v-model="keyword">
                <button @click="goToSearch()">搜索</button>
            </div>
        </div>
        <nav class="nav">
            <ul>
                <!--li中添加 active 类样式，显示焦点状态。-->
                <li :class="{active:$route.params.type == 'in_theaters'}"><a href="#/movie/in_theaters">正在热映</a></li>
                <li :class="{active:$route.params.type == 'coming_soon'}"><a href="#/movie/coming_soon">即将上映</a></li>
                <li :class="{active:$route.params.type == 'top250'}"><a href="#/movie/top250">Top250</a></li>
            </ul>
        </nav>
    </div>
    <!-- 顶部导航栏结束 -->
    
    <div class="container">
      <router-view></router-view>
    </div>
    <footer class="footer">
        <div class="container">
            <p>版权所有&copy; have a fun </p>
        </div>
    </footer>
  </div>
</template>
<script>
export default {
    data(){
        return {
            keyword:''
        }
    },
    methods: {
        goToSearch(){
            this.$router.push({path:'/searchlist/'+this.keyword})
        }
    },
}
</script>
<style>

</style>
