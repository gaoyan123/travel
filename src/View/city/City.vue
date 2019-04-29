<template>
<div>
  <city-header></city-header>
  <city-list
    :cities="cities"
    :hot="HotCity"
    :letter="letter"
    :value="value"
  >
  </city-list>
  <city-alphabet
    :cities="cities"
    @change="handleLetterChange">
  </city-alphabet>
  <city-search
    :cities="cities"
    v-model="value"></city-search>
</div>
</template>

<script>
  import axios from 'axios'
  import CityHeader from './components/Header'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  import CitySearch from './components/Search'
  export default {
    name:'city',
    components: {
      CityHeader,
      CityList,
      CityAlphabet,
      CitySearch
    },
    data(){
        return {
          HotCity :[],
          cities : {},
          letter: '',
          value: {}
        }
    },

    mounted () {
      this.getCityInfo();
    },
    methods:{
      getCityInfo() {
        axios.get('../../../static/mock/city.json')
          .then(this.getCityInfoSucc)
      },
      getCityInfoSucc(res) {
          const data = res.data;
          if(data.ret && data.data){
            const result = data.data;
            this.HotCity = result.hotCities;
            this.cities = result.cities;
          }
      },
      handleLetterChange(letter) {
          this.letter = letter
      }
    }
  }
</script>
<style scoped>
</style>
