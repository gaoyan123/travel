<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="hanleLetterClick"
    >{{item}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    props: {
      cities: Object
    },
    data() {
      return{
          touchStatus : false,
          startY: 0,
          timer : 0
      }
    },
    uodated() {
        this.startY = this.$refs['A'][0].offsetTop;
    },
    computed: {
      letters () {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    methods :{
      hanleLetterClick(e) {
          this.$emit('change',e.target.innerText)
      },
      handleTouchStart() {
          this.touchStatus = true
      },
      handleTouchMove(e) {
         if( this.touchStatus){
             if(this.timer){
                 clearTimeout(this.timer)
             }
            const touchY = e.touches[0].clientY;
            const index = Math.floor((touchY - this.startY)/20);
            if(index > 0 && index < this.letters.length){
              this.$emit('change',this.letters[index]);
            }
         }
      },
      handleTouchEnd() {
        this.touchStatus = true
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
