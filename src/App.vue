<template>
  <div>
    hello world

    <button @click="changeUserRouter">改变路由规则</button>


    <router-link to="/a">aaa</router-link>
    <router-link to="/b">bbb</router-link>

    <router-view></router-view>
    <router-view name="b"></router-view>
    <router-view name="c"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      message: ''
    }
  },
  mounted() {
  },
  watch: {
    $route() {
      this.message = '2';
    }
  },
  methods: {
    test11() {
      console.log(3322)
    },
    changeUserRouter() {
      this.$router.push('/user/32');
      // this.$router.push({path: '/user/78', replace: true});
      // 注意下面的在路由配置的时候一定要添加name
      // this.$router.push({name: 'user', params: {"userId": 'aaa'}});
      // this.$router.push({path: '/user', query: {id: 22}});
      this.$router.go(-1);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
