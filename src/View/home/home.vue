<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import axios from  'axios'
  import homeHeader from './components/header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
    export default {
      name: "home.vue",
      components:{
        homeHeader,
        HomeSwiper,
        HomeIcons,
        HomeWeekend,
        HomeRecommend
      },
      data() {
          return {
            lastCity: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
          }
      },
      methods:{
        getHomeInfo() {
            axios.get('../../../static/mock/index.json')
              .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res) {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
          }
        },
      },
      mounted() {
        this.lastCity = this.city
        this.getHomeInfo()
      }
    }
</script>

<style lang="stylus" scoped>

</style>
