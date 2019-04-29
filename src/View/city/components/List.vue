<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item in hot"
            :key="item.id"
            @click="changeCurrentCity(item.name)">

              <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) in cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem in item"
            :key="innerItem.id"
            @click="changeCurrentCity(innerItem.name)"
          >
              {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import { mapState } from 'vuex'
  export default {
    name: 'CityList',
    props: {
      cities: Object,
      hot: Array,
      letter:String,
      value:Object
    },
    mounted() {
      this.initScroll()
    },
    watch: {
      letter () {
        if (this.letter) {
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      },
      value(){
        const element = this.$refs[this.value.key][0].getElementsByTagName('div')[1].getElementsByTagName('div')[this.value.index];
        this.scroll.scrollToElement(element)
      }
    },
    computed: {
      ...mapState({
        city:'city'
      })
    },
    methods: {
      initScroll() {
         // 使用了better-scroll，默认它会阻止touch和click事件
          this.scroll = new Bscroll(this.$refs.wrapper,{click: true});
      },
      changeCurrentCity(item){
        this.$store.commit('changeCity',item);
      }
    }
  }
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc

  .border-bottom
    &:before
      border-color: #ccc

  .wrapper
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
