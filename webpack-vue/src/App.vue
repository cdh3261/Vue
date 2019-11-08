<template>
<div>
  <h1>여기는 최상위입니다!!!!!!!!!!</h1>
  <!-- 3. 등록된 컴포넌트 사용 -->
  <todo-list category='싸피'></todo-list>
  <todo-list category='쇼핑'></todo-list>
  <TodoList category='취업'/>
  <!-- 같은 표현 -->
</div>
</template>

<script>
// 1.컴포넌트를 가져온다.
import TodoList from './components/TodoList.vue'

export default {
  // 2.가져온 컴포넌트 등록
  components: {
    TodoList,
  }
}
</script>

<style>

</style>