<template>
<!-- 1-1. click하면 onVideoSelect라는 함수를 실행한다. -->
  <li @click="onVideoSelect" class="list-group-item">
    <img :src="video.snippet.thumbnails.default.url" class="mr-3">
    {{video.snippet.title}}
  </li>
</template>
<script>
export default {
  name: 'VideoListItem',
  props: {
    video: Object
  },
  computed: {
    thumbnailURL(){
      return this.video.snippet.thumbnails.default.url
    }
  },
  methods: {
    // 1-2. emit을 써서 부모에게 videoSelect 이벤트를 video인자와 함께 전달한다.
    onVideoSelect(){
      this.$emit('videoSelect', this.video)
    }
  }
}
</script>
<style>
</style>