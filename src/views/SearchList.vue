<template>
  <div class="list">
        <ul>
          <Loading v-if="isShow"></Loading>
            <li v-for="item in list" :key="item.id">
                <router-link :to="'/detail/'+item.id">
                    <img :src="'https://images.weserv.nl/?url='+item.images.large" alt="">
                </router-link>
                <div class="meta">
                    <h4><span>{{item.title}}</span> <em>9.9分</em></h4>
                    <div class="otherinfo">类型:<span v-for="(item1,index) in item.genres" :key="index">{{item1}}</span></div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import Loading from '../components/Loading.vue'
export default {
  created() {
    this.getList()
  },
  methods: {
    getList(){
      this.$http.jsonp(`https://api.douban.com/v2/movie/search?q=${this.$route.params.keyword}&start=0&count=30`).then(res=>{
        // console.log(res)
        this.isShow = false 
        this.list = res.body.subjects
      })
    }
  },
  watch:{
    '$route':function(){
      this.isShow = true 
      this.list = []
      this.getList()
    }
  },
  data () {
    return {
      isShow:true,
      list:[]
    };
  },
  components:{
    Loading
  }
}
</script>
<style lang="scss" scoped>
</style>