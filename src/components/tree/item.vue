<template>
  <ul>
    <li>{{ treename }}</li>
    <li v-if="children && children.length > 0">
      <item
        v-for="(item, index) of children"
        :treename="item.name"
        :key="index"
        :children="item.children"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "Item",
  props: {
    treename: {
      type: String,
      default: ""
    },
    children: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  mounted() {
    // console.log("------------------------------------");
    // console.log(this.name);
    // console.log("------------------------------------");
  }
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
li {
  text-align: left;
}
</style>
