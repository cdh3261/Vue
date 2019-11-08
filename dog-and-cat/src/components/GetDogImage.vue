<template>
  <div>
    <!-- 이벤트 활성화를 위한 v-on:click -->
    <button v-on:click='getDogImageUrl'>멍</button>
    <img v-bind:src="dogImage">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function(){
    return {
      dogImage: ''
    }
  },
  methods: {
    getDogImageUrl: function(){
      const DOG_URL = 'https://dog.ceo/api/breeds/image/random'
      axios.get(DOG_URL)
      .then((response)=>{
        this.dogImage = response.data.message
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