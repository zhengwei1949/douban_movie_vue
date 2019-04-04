# 豆瓣电影项目
- 技术选型
  + vue
  + vue ui
  + vue resource
  + 接口文档：https://blog.csdn.net/mario_faker/article/details/79618235
- 思路
  1. 首页自动跳转到正在热映页面
  2. loading效果使用了v-if
  3. 由于正在热映、即将上映、top250共用了同一个路由，所以在切换的时候数据不更新，解决办法：watch监视路由的变化来重新调用getList方法
  4. 搜索这块用到了编程式路由