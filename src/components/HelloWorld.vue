<template>
  <div class="hello">
    <div>
      <h1>vue-router</h1>
      <div>
        <p><router-link to="/Detail">声明式跳转:router-link</router-link></p>

        <p><button @click="handleClick(1)">跳转1：path</button></p>
        <p><button @click="handleClick(2)">跳转2：path</button></p>
        <p><button @click="handleClick(3)">跳转3：name</button></p>

        <p><button @click="handleClick(4)">路由query1</button></p>
        <p><button @click="handleClick(5)">路由query2</button></p>
        <p><button @click="handleClick(6)">路由query3</button></p>

        <p><button @click="handleClick(7)">路由：params1</button></p>
        <p><button @click="handleClick(8)">路由：params2</button></p>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted(){},
  methods:{
    handleClick(type){
      if(type === 1)return this.$router.push('/Detail');
      if(type === 2)return this.$router.push({path:'/Detail'});
      if(type === 3)return this.$router.push({name:'Detail'});

      if(type === 4)return this.$router.push('/Detail?pid=10101&name=user');
      if(type === 5)return this.$router.push({name:'Detail',params:{id:1001},query:{pid:10101}});
      if(type === 6)return this.$router.push({path:'/Detail',query:{pid:10102}});

      if(type === 7)return this.$router.push({path:'/Detail/999',query:{pid:10101}});
      if(type === 8)return this.$router.push({name:'Detail',params:{pid:10103},query:{pid:10104}});
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
