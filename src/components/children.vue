<template>
  <div class="">
    {{ title }}
  </div>
</template>

<script>
export default {
  prop: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    total() {
      //计算激活项总价
      return this.cart.reduce((sum, c) => {
        if (c.active) {
          sum += c.price * c.count;
        }
        return sum;
      }, 0);
    }
  },
  watch: {
    a: function(val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
    },
    // 方法名
    b: "someMethod",
    // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
    c: {
      handler: function(val, oldVal) {
        /* ... */
      },
      deep: true
    },
    // 该回调将会在侦听开始之后被立即调用
    d: {
      handler: "someMethod",
      immediate: true
    },
    e: [
      "handle1",
      function handle2(val, oldVal) {
        /* ... */
      },
      {
        handler: function handle3(val, oldVal) {
          /* ... */
        }
        /* ... */
      }
    ],
    // watch vm.e.f's value: {g: 5}
    "e.f": function(val, oldVal) {
      /* ... */
    }
  },
  //方法集合
  methods: {
    btns() {
      this.$emit("up", this.title);
    }
  }
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
</style>
