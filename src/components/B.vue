<template>
  <div>
    我是b
  </div>
  <router-view></router-view>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    console.log(this.$slots.header);
  },
  methods:{
    test() {
      console.log('可以用');
    }
  }
}
</script>
