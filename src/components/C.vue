<template>
  <div>
    我是C
    <button @click="changeRouter">改变路由</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {
    console.log('我是C', this.$route.params);
  },
  methods:{
    changeRouter() {
      this.$router.push('/b/c/6');
    }
  },
  watch:{
    $route(newRouter) {
      console.log('2', newRouter);
    }
  }
}

</script>
