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
        <div class="paging">
            <label>总共：{{total}}条记录,第{{page}}/{{totalPage}}页;</label>
            <!-- 加上disable类样式，表示按钮禁用状态 -->
            <button class="prev" :class="{disable:page==1}" @click="goPage(-1)">上一页</button>
            <button class="next" :class="{disable:page==totalPage}" @click="goPage(1)">下一页</button>
        </div>
    </div>
</template>
<script>
import Loading from '../components/Loading.vue'
export default {
  created() {
    console.log(this)
    this.type = this.$route.params.type
    this.getList()
  },
  watch:{
    '$route':function(newVal,oldVal){
      this.type = this.$route.params.type 
      this.getList()
    }
  },
  methods: {
    getList(){
      this.isShow = true 
      this.list = []
      var start = (this.page - 1) * this.count 
      this.$http.jsonp(`https://api.douban.com/v2/movie/${this.type}?city=杭州&start=${start}&count=${this.count}`).then(res=>{
        // console.log(res)
        this.isShow = false 
        this.list = res.body.subjects
        this.total = res.body.total
        this.totalPage = Math.ceil(this.total / this.count)
      })
    },
    goPage(flag){
      if(flag == 1){
        if(this.page == this.totalPage)return 
        this.page++
        this.getList()
      }else{
        if(this.page==1)return
        this.page--
        this.getList()
      }
    }
  },
  data () {
    return {
      type:'',
      list:[],
      page:1,
      count:20,
      totalPage:0,
      total:0,
      isShow:true 
    };
  },
  components:{
    Loading
  }
}
</script>
<style lang="scss" scoped>
</style>