<template>
  <div style="height: 3000px;">
    我是A
  </div>
</template>
<script>
export default {
  props: ['id', 'id2','test1'],
  data() {
    return {

    }
  },
  watch:{
    $route(newRoute) {
      console.log(this.id, this.id2);
      console.log(newRoute);
    }
  },
  mounted() {
    // console.log(this.$route)
    console.log('props', this.test1);
  },
  beforeRouteEnter(to,from) {
    console.log('路由内enter', to, from,this);
  },
  beforeRouteUpdate(to,from) {
    console.log('路由内enter', to, from,this);
  },
  beforeRouteLeave(to,from) {
    console.log('路由内enter', to, from, this);
  },
  methods:{

  }
}
</script>
