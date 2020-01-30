<template>
  <div class="text" v-if="isShow">
    {{ msg }}
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = true;
      // setTimeout(() => {
      //   this.hide();
      // }, 2000);
    },
    hide() {
      this.isShow = false;
      // this.$nextTick(() => {
      //   this.$destroy();
      // });
    }
  }
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.text {
  position: fixed;
  top: 10%;
  left: 45%;
  color: red;
}
</style>
