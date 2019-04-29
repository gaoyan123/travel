<template>
  <div>
    <div class="search">
      <input type="text" class="search-input" placeholder="请输入城市名搜索" v-model="keyword">
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="list in CityList"
          @click="handleCityClick(list.name)">
          {{list.name}}
        </li>
        <li
          class="search-item border-bottom"
          v-show="hasNoData">
          没有匹配到数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    import { mapState } from 'vuex'
    export default {
        name: 'CitySearch',
        props: {
          cities: Object,
          value: Object|String,
        },
        data() {
            return {
              keyword: '',
              timer:null,
              CityList: [],
              cityValues: {},
            }
        },
        computed: {
          hasNoData () {
              return !this.CityList.length && this.keyword.length > 0
          },
          ...mapState({
            city:'city'
          })
        },
        methods:{
          handleCityClick(value) {
            this.keyword = '';
            this.changeCurrentCity(value);
          },
          changeCurrentCity(item){
            this.$store.commit('changeCity',item);
          }
        },
        watch: {
          keyword() {
            if (this.timer) {
              clearTimeout(this.timer)
            }

            if(!this.keyword){
              this.CityList = []
              return
            }
            this.timer = setTimeout(() => {
              // todo:对输入数据做校验
              for(let key in this.cities){
                const item = this.cities[key];
                for(let i = 0;i < item.length; i++){
                  const city = item[i];
                  if(city.name.indexOf(this.keyword) !== -1 || city.spell.indexOf(this.keyword) !== -1){
                    const value = {
                      key: '',
                      index: 0
                    };
                    this.CityList.push(city);
                    value.key = key;
                    value.index = i;
                    this.cityValues[city.id] = value;
                  }
                }
              }
            },100)
          }
        }
    }
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
