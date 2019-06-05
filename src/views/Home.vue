<template>
  <div class="home">
    <p>家</p>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <p>{{count}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
// import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default {
  data() {
    return {
      // count: this.$store.state.count
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>
<style lang="scss" scoped>
.home{
  p{
    margin: 0;
    padding: 1em 0;
  }
}
</style>

