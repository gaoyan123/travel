<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe616;</div></div>
    <div class="header-input"><span class="iconfont input-icon">&#xe650;</span>输入城市/景点/游玩主题</div>
    <div class="header-right">城市 <span class="iconfont city-icon">&#xe635;</span></div>
  </div>
</template>

<script>
    export default {
        name: "homeHeader"
    }
</script>
<!-- scoped关键字，让样式只在当前组件中生效 -->
<style lang="stylus" scoped>
  /*@import "~@/assets/styles/varibles.styl"*/
  @import "~styles/varibles.styl"
  .header
    display flex
    line-height .86rem
    background $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
         font-size .5rem
         text-align center
    .header-input
      flex 1
      background #ffffff
      border-radius .1rem
      height .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      color: #ccc
      line-height .64rem
      .input-icon
        margin-right .1rem
    .header-right
      width 1.24rem
      float right
      text-align center
      font-size .32rem
      .city-icon
        font-size .3rem

</style>
