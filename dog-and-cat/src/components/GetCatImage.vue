<template>
  <div>
    <!-- 이벤트 활성화를 위한 v-on:click -->
    <button v-on:click='getCatImageUrl'>야옹</button>
    <img v-bind:src="catImage">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function(){
    return {
      catImage: ''
    }
  },
  methods: {
    getCatImageUrl: function(){
      const CAT_URL = 'https://api.thecatapi.com/v1/images/search'
      axios.get(CAT_URL)
      .then((response)=>{
        console.log(response)
        this.catImage = response.data[0].url
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>