<template>
  <ul class="list-group">
    <!-- 2-1. videoSelect이벤트가 발생하면 onVideoSelect 함수를 실행한다. -->
    <VideoListItem v-for="video in videos" :key="video.etag" :video="video" @videoSelect="onVideoSelect"/>
  </ul>
</template>
<script>
import VideoListItem from './VideoListItem'
export default {
  name: 'VideoList',
  //부모가 보내 준 것을 사용하기 위해 등록
  props: {
    videos: Array,
  },
  components: {
    VideoListItem,
  },
  methods: {
    // 2-2. 자식에게 받은 video인자를 써주면서 emit으로 부모에게 이벤트와 인자를 함께 보낸다.
    onVideoSelect(video){
      this.$emit('videoSelect', video)
    }
  }
}
</script>
<style>
</style>