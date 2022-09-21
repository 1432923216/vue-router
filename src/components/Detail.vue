<template>
  <div>
    <h1>这是detail页面</h1>
    <div>
      <ul>
        <li>params: {{params}} </li>
        <li>query: {{query}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name:'HelloWorld',
    data(){
      return{
        params: this.$route.params,
        query: this.$route.query
      }
    },
    mounted(){}
  }
</script>
