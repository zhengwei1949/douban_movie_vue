<template>
  <div>
     <div class="detail">
        <h1>{{data.title}}</h1>
        <div class="dt-info">
            <div class="dti-i"><img :src="'https://images.weserv.nl/?url='+data.images.large" alt=""></div>
            <div class="dti-w">
                <p>
                    <strong>导演：</strong>
                    <span>{{data.directors[0].name}}</span>
                </p>
                <p>
                    <strong>主演：</strong>
                    <span v-for="(item,index) in data.casts" :key="index">{{item.name}} </span>
                </p>
                <p><strong>类型：</strong>{{data.genres.join(' ')}}</p>
                <p><strong>国家：</strong>{{data.countries.join(' ')}}</p>
                <p><strong>评分：</strong>{{data.rating.average}}</p>
                <p><strong>时间：</strong>{{data.year}}</p>
                <p><strong>又名：</strong>{{data.original_title}}</p>
            </div>
        </div>
        <h3>剧情简介:</h3>
        <p style="color:#676767">{{data.summary}}</p>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.getData()
  },
  methods: {
    getData(){
      this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+this.$route.params.id).then(res=>{
        console.log(res)
        this.data = res.body
      })
    }
  },
  data () {
    return {
      data:{}
    };
  }
}
</script>
<style lang="scss" scoped>
</style>