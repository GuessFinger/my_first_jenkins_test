<template>
  <div style="height: 3000px;">
    我是用户 哈哈哈
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  created() {
    console.log(this.$route);
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(vm, '拿得到？');
    });
    console.log('路由内enter', to, from, this);
  },
  beforeRouteUpdate(to,from) {
    console.log('路由内update', to, from,this);
  },
  beforeRouteLeave(to,from) {
    console.log('路由内leave', to, from, this);
  },
  methods:{
  },
  watch:{
    $route(newRouter) {
      console.log('2', newRouter);
    }
  }
}

</script>
