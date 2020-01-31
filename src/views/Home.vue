<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>vuex</h1>
    {{ $store.state.count }}
    {{ $store.getters.increment }}
    <button @click="add">+</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/index.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  dd() {},
  methods: {
    add() {
      this.$store.dispatch("increment");
    }
  },
  mounted() {
    console.log("------------------------------------");
    console.log(this.$store);
    console.log("------------------------------------");
  }
};
</script>
