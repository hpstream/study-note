<template>
  <div class="tree">
    <item
      v-for="(item, index) of treeData"
      :treename="item.name"
      :key="index"
      :children="item.children"
    />
  </div>
</template>

<script>
import item from "@/components/tree/item.vue";
export default {
  props: {
    treeData: {
      type: Array,
      default: () => []
    }
  },
  components: {
    item
  },
  data() {
    return {};
  },
  mounted() {},
  //方法集合
  methods: {}
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
</style>
