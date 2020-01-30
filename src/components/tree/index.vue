<template>
  <div class="demo">
    <tree :tree-data="data" />
  </div>
</template>

<script>
import tree from "@/components/tree/tree.vue";
export default {
  components: {
    tree
  },
  data() {
    return {
      data: [
        {
          name: "title1",
          children: [
            {
              name: "title2",
              children: [
                {
                  name: "title21",
                  children: []
                }
              ]
            },
            {
              name: "title3",
              children: [
                {
                  name: "title31",
                  children: []
                }
              ]
            }
          ]
        },
        {
          name: "title1",
          children: [
            {
              name: "title2",
              children: [
                {
                  name: "title21",
                  children: []
                }
              ]
            },
            {
              name: "title3",
              children: [
                {
                  name: "title31",
                  children: []
                }
              ]
            }
          ]
        }
      ]
    };
  },
  //方法集合
  methods: {}
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
</style>
