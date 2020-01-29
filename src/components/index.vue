<template>
  <div class="">
    <input type="text" :value="value" @input="input" />
    <!-- 等价于 -->
    <input type="text" v-model="value" />
    <!-- <children title="hello word" @up="up"></children> -->
    <h1>自定义表单</h1>
    <h-form :model="formOption" :rules="rules" ref="form">
      <h-formitem prop="title" label="标题">
        <h-input v-model="formOption.title"></h-input>
      </h-formitem>
      <h-formitem props="title">
        <button @click="clickbtn">提交</button>
      </h-formitem>
    </h-form>
  </div>
</template>

<script>
import hForm from "./form";
import hFormitem from "./formitem";
import hInput from "./input";
export default {
  components: { hForm, hInput, hFormitem },
  data() {
    return {
      value: "",
      formOption: {
        title: ""
      },
      rules: {
        title: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    input(e) {
      this.value = e.target.value;
    },
    clickbtn() {
      this.$refs["form"].validate(res => {
        console.log("------------------------------------");
        console.log(res);
        console.log("------------------------------------");
      });
    },
    up() {}
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
</style>
